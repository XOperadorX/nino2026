import sqlite3
import re
import os

# ============================================================
# 1. CONFIGURAÇÕES
# ============================================================
ARQUIVO_ENTRADA = "README.md"
BANCO_SAIDA = "dados.db"

# ============================================================
# 2. FUNÇÕES AUXILIARES
# ============================================================
def limpar_valor(texto):
    """
    Converte string monetária brasileira em float.
    Exemplos:
        'R$ 1.234,56'   -> 1234.56
        '-R$ 1.234,56'  -> -1234.56
        'R$ -  '        -> None
        '#DIV/0!'       -> None
        ''              -> None
    """
    if texto is None:
        return None
    texto = texto.strip()
    if texto in ("", "#DIV/0!", "R$ -  ", "R$ -  ", "R$ -"):
        return None
    if texto.startswith("#"):
        return None

    negativo = False
    if texto.startswith("-"):
        negativo = True
        texto = texto[1:].strip()
    elif texto.startswith("-R$"):
        negativo = True
        texto = texto[3:].strip()

    # Remove "R$"
    texto = texto.replace("R$", "").strip()

    # Remove espaços especiais (non-breaking space)
    texto = texto.replace("\u00a0", "").replace("\u2007", "").replace("\u202f", "")

    # Remove pontos de milhar e troca vírgula por ponto
    texto = texto.replace(".", "").replace(",", ".")

    try:
        valor = float(texto)
    except ValueError:
        return None

    return -valor if negativo else valor


def eh_linha_de_dados(linha):
    """Verifica se a linha parece conter dados (tem tab e algum conteúdo)."""
    return "\t" in linha and linha.strip() != ""


def extrair_categoria(linha):
    """Pega o primeiro campo (antes do primeiro tab) como nome da categoria."""
    partes = linha.split("\t")
    return partes[0].strip()


def extrair_valores(linha):
    """Retorna a lista de valores (após o primeiro campo)."""
    partes = linha.split("\t")
    return partes[1:]


# ============================================================
# 3. LEITURA E PARSING DO ARQUIVO
# ============================================================
def ler_arquivo(caminho):
    with open(caminho, "r", encoding="utf-8") as f:
        return f.readlines()


def encontrar_periodos(linhas):
    """
    Procura a linha que contém os meses (ex.: 'janeiro, 2023', 'fevereiro, 2023'...).
    Retorna a lista de períodos.
    """
    meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ]
    for linha in linhas:
        if "janeiro, 2023" in linha and "dezembro, 2026" in linha:
            partes = linha.split("\t")
            periodos = []
            for p in partes:
                p = p.strip()
                if re.match(r"^[a-zç]+, \d{4}$", p):
                    periodos.append(p)
            return periodos
    return []


def processar_linhas(linhas, periodos):
    """
    Retorna lista de tuplas: (categoria, [valores...])
    Ignora linhas que não têm valores numéricos.
    """
    registros = []
    for linha in linhas:
        if not eh_linha_de_dados(linha):
            continue
        categoria = extrair_categoria(linha)
        if not categoria:
            continue
        # Ignora linhas de cabeçalho
        if categoria.upper() in (
            "COTROLE DO MES", "CONTROLE DO MES",
            "TOTAL RECEBIDO NO MES ANTERIOR",
            "TOTAL RECEBIDO NESTE MES",
            "TOTAL DO PATRIMONIO",
            "SALDO DE GASTO + OU -",
            "PONTUACAO DO MES + OU -",
        ):
            continue

        valores_brutos = extrair_valores(linha)
        valores = [limpar_valor(v) for v in valores_brutos]

        # Só inclui se pelo menos um valor for numérico
        if any(v is not None for v in valores):
            registros.append((categoria, valores))

    return registros


# ============================================================
# 4. CRIAÇÃO DO BANCO SQLITE
# ============================================================
def criar_banco(caminho):
    conn = sqlite3.connect(caminho)
    cur = conn.cursor()

    cur.executescript("""
        DROP TABLE IF EXISTS valores;
        DROP TABLE IF EXISTS categorias;
        DROP TABLE IF EXISTS periodos;

        CREATE TABLE categorias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT UNIQUE NOT NULL
        );

        CREATE TABLE periodos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            descricao TEXT UNIQUE NOT NULL,
            ano INTEGER NOT NULL,
            mes INTEGER NOT NULL
        );

        CREATE TABLE valores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            categoria_id INTEGER NOT NULL,
            periodo_id INTEGER NOT NULL,
            valor REAL,
            FOREIGN KEY (categoria_id) REFERENCES categorias(id),
            FOREIGN KEY (periodo_id) REFERENCES periodos(id),
            UNIQUE(categoria_id, periodo_id)
        );
    """)
    conn.commit()
    return conn


def inserir_periodos(conn, periodos):
    cur = conn.cursor()
    mapa_mes = {
        "janeiro": 1, "fevereiro": 2, "março": 3, "abril": 4,
        "maio": 5, "junho": 6, "julho": 7, "agosto": 8,
        "setembro": 9, "outubro": 10, "novembro": 11, "dezembro": 12
    }
    ids = {}
    for p in periodos:
        match = re.match(r"^([a-zç]+), (\d{4})$", p)
        if not match:
            continue
        nome_mes, ano = match.group(1), int(match.group(2))
        mes_num = mapa_mes.get(nome_mes, 0)
        cur.execute(
            "INSERT OR IGNORE INTO periodos (descricao, ano, mes) VALUES (?, ?, ?)",
            (p, ano, mes_num)
        )
        cur.execute("SELECT id FROM periodos WHERE descricao = ?", (p,))
        ids[p] = cur.fetchone()[0]
    conn.commit()
    return ids


def inserir_categorias(conn, registros):
    cur = conn.cursor()
    ids = {}
    for categoria, _ in registros:
        cur.execute(
            "INSERT OR IGNORE INTO categorias (nome) VALUES (?)",
            (categoria,)
        )
        cur.execute("SELECT id FROM categorias WHERE nome = ?", (categoria,))
        ids[categoria] = cur.fetchone()[0]
    conn.commit()
    return ids


def inserir_valores(conn, registros, mapa_cat, mapa_per):
    cur = conn.cursor()
    inseridos = 0
    for categoria, valores in registros:
        cat_id = mapa_cat.get(categoria)
        if cat_id is None:
            continue
        for i, valor in enumerate(valores):
            if i >= len(mapa_per):
                break
            per_id = list(mapa_per.values())[i]
            if valor is None:
                continue
            cur.execute(
                """INSERT OR REPLACE INTO valores
                   (categoria_id, periodo_id, valor)
                   VALUES (?, ?, ?)""",
                (cat_id, per_id, valor)
            )
            inseridos += 1
    conn.commit()
    return inseridos


# ============================================================
# 5. MAIN
# ============================================================
def main():
    if not os.path.exists(ARQUIVO_ENTRADA):
        print(f"❌ Arquivo '{ARQUIVO_ENTRADA}' não encontrado.")
        return

    print(f"📖 Lendo '{ARQUIVO_ENTRADA}'...")
    linhas = ler_arquivo(ARQUIVO_ENTRADA)

    print("📅 Procurando períodos...")
    periodos = encontrar_periodos(linhas)
    if not periodos:
        print("❌ Não foi possível encontrar os períodos.")
        return
    print(f"   ✅ {len(periodos)} períodos encontrados: "
          f"{periodos[0]} ... {periodos[-1]}")

    print("🧮 Processando linhas...")
    registros = processar_linhas(linhas, periodos)
    print(f"   ✅ {len(registros)} categorias com dados.")

    print(f"🗄️  Criando banco '{BANCO_SAIDA}'...")
    conn = criar_banco(BANCO_SAIDA)

    print("📅 Inserindo períodos...")
    mapa_per = inserir_periodos(conn, periodos)

    print("🏷️  Inserindo categorias...")
    mapa_cat = inserir_categorias(conn, registros)

    print("💰 Inserindo valores...")
    total = inserir_valores(conn, registros, mapa_cat, mapa_per)
    print(f"   ✅ {total} valores inseridos.")

    conn.close()
    print(f"\n🎉 Banco '{BANCO_SAIDA}' criado com sucesso!")


if __name__ == "__main__":
    main()