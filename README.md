# nino2026 — Controle Financeiro Pessoal

Planilha de controle de patrimônio, investimentos e recebimentos mensais, com dados de **janeiro/2023 a dezembro/2027** (60 meses).

---

## 📂 Estrutura

```
📂 nino2026/
 ├── 📄 index.html
 ├── 🎨 style.css
 ├── 🧩 app.js
 ├── 📄 README.md
 └── 🐍 importar_dados.py   (opcional)
```

---

## 🚀 Como usar

1. Salve os 4 arquivos (`index.html`, `style.css`, `app.js`, `README.md`) na **mesma pasta**.
2. Dê **duplo clique** em `index.html`.
3. Pronto — os dados estão embutidos no `app.js`, **não precisa de servidor**.

> ⚠️ O gráfico usa o **Chart.js via CDN** — precisa de conexão à internet na primeira carga.

---

## ✨ Funcionalidades

### 📈 Gráfico de evolução (com título em tempo real)
- Chart.js de linha mostrando:
  - **TOTAL DO PATRIMÔNIO** (padrão).
  - Ao filtrar por **banco** → soma das categorias do banco.
  - Ao filtrar por **categoria** → aquela categoria específica.
- **Título atualiza em tempo real** conforme qualquer filtro ativo:
  - `📈 Total do Patrimônio — 📅 2024`
  - `📈 Soma: 🏦 RICO — 📅 março • 📅 2024`
  - `📈 SALARIO PROVENTOS — 🔎 "2026"`
- Cores adaptadas ao tema claro/escuro.
- Botão **▼/▲** para ocultar/mostrar.

### 🔄 Sincronização Banco ↔ Categoria
- **Seleciona banco** → select de categoria mostra só as categorias daquele banco.
- **Seleciona categoria** → banco é auto-selecionado para o pai dela.
- Se a categoria não pertence a nenhum banco, o filtro de banco é **limpo**.

### 🏦 Menu Bancos
- ➕ **Cadastrar novo banco** (aparece **imediatamente** na tabela como grupo vazio `(vazio)`).
- ✏️ **Alterar** (inline).
- 🗑️ **Excluir** (com confirmação).
- ⬆️ **Mover para cima** / ⬇️ **Mover para baixo** (reordenar a lista).
- ↺ **Restaurar padrão**.
- Salvo em `localStorage`.

### 📂 Menu Categorias
- ➕ **Cadastrar nova categoria** (aparece **imediatamente** na tabela dentro do grupo dela).
- ✏️ **Alterar** (renomeia — alias visual, mantém os valores originais).
- 🗑️ **Excluir** (oculta da tabela).
- 🔀 **Mover** categoria para outro banco (individual ou em lote):
  - Ao mover, o prefixo do banco é **ajustado automaticamente** (`RICO - PROVENTOS` → `INTER - PROVENTOS`).
  - Mover para **"— Sem banco (📌 Outros) —"** remove o prefixo do banco.
  - **Edições de células são preservadas** ao mover.
- ☑️ **Selecionar todas** + botão **🔀 Mover N selecionadas**.
- ↺ **Restaurar padrão**.
- Salvo em `localStorage`.

### 📅 Menu Períodos
- ➕ **Adicionar ano** inteiro (12 meses de uma vez).
- ➕ **Adicionar mês** específico (mês + ano).
- 🗑️ **Excluir mês** individual.
- 🗑️ **Excluir ano** inteiro.
- ↺ **Restaurar padrão** (2023–2027).
- Lista agrupada por ano.
- Salvo em `localStorage`.

### 💾 Menu Valores
- Edição **inline** de qualquer célula da tabela (clique na célula, digite o valor).
- Células editadas ganham **fundo azul claro** + **•** no canto.
- **Ctrl+Delete** dentro do input remove a edição da célula.
- ⬇️ **Exportar edições (JSON)**.
- ⬆️ **Importar edições (JSON)**.
- ↺ **Restaurar todos os valores originais**.
- Salvo em `localStorage`.

### 🔍 Filtros
- 🏦 **Banco** — lista personalizável.
- 🏷️ **Categoria** — com `<optgroup>` por banco.
- 📅 **Ano** — 2023, 2024, 2025, 2026, 2027 (+ anos adicionados).
- 📅 **Mês** — janeiro a dezembro.
- 📅 **Período específico** — escolhe um mês/ano (limpa Ano e Mês).
- 🔎 **Buscar** — por texto no nome da categoria.
- ➕➖ **Mostrar** — todos / positivos / negativos / sem zero.
- 🧹 **Limpar** — reseta todos os filtros.

### 📊 Cards
- Categorias, períodos exibidos, células, soma, maior e menor valor (do filtro atual).

### 📌 Outros
- Agrupamento visual por banco (cabeçalho `🏦 NOME (n categorias)`).
- Cabeçalho e primeira coluna **fixos** ao rolar.
- ⬇️ **Exportar CSV** (separador `;` + BOM UTF-8).
- 🌗 **Tema claro/escuro automático**.
- **Feedbacks em tempo real**: ao cadastrar banco/categoria, o grupo/linha aparece imediatamente.

---

## 🩹 Correções recentes (gráfico)

O gráfico foi reforçado com 4 correções para garantir renderização consistente em qualquer navegador:

1. **Aguardar o Chart.js carregar** antes de iniciar (retry a cada 100ms).
2. **`requestAnimationFrame` duplo** antes da 1ª renderização, garantindo que o canvas tenha dimensões reais.
3. **`atualizarGrafico()` resiliente**:
   - Verifica se `Chart` está definido (retry em 200ms se não).
   - Destrói a instância anterior antes de recriar.
   - Mostra mensagem "Sem dados para exibir no gráfico." se não houver valores.
   - Envolve a criação do gráfico em `try/catch` e loga erros no console.
4. **CSS reforçado** no `.grafico-container`:
   - `width: 100%`, `min-height: 220px`.
   - Regra explícita para o `<canvas>` ocupar 100% de largura/altura.

Além disso, ao reexibir o gráfico pelo botão **▼/▲**, ele é redesenhado via `requestAnimationFrame`.

---

## 💾 Armazenamento

Tudo é salvo no **`localStorage`** do navegador:

| Chave | Conteúdo |
|---|---|
| `nino2026_bancos` | Lista de bancos |
| `nino2026_categorias_hidden` | Categorias ocultas |
| `nino2026_categorias_alias` | Renomeações (alias) |
| `nino2026_categorias_custom` | Categorias personalizadas |
| `nino2026_valores_editados` | Valores editados (chave: `Categoria\|\|\|Período`) |
| `nino2026_periodos` | Períodos (meses/anos) adicionados |

> 💡 Para **resetar tudo**, abra o DevTools do navegador (F12) → Console → execute:
> ```js
> localStorage.clear(); location.reload();
> ```

---

## 🧪 Como testar cada funcionalidade

### Gráfico em tempo real
1. Mude o filtro **Ano** para `2024` → título: `📈 Total do Patrimônio — 📅 2024`.
2. Mude o **Mês** para `março` → título: `📈 Total do Patrimônio — 📅 março • 📅 2024`.
3. Escolha **Banco = RICO** → título: `📈 Soma: 🏦 RICO — 📅 março • 📅 2024`.
4. Digite algo na **Busca** → título ganha `🔎 "..."`.
5. Clique em **🧹 Limpar** → título volta a `📈 Total do Patrimônio`.

### Cadastrar banco (feedback imediato)
1. **🏦 Bancos ▾** → **➕ Cadastrar novo banco** → `NUBANK` → Enter.
2. Feche o menu → veja o grupo `🏦 NUBANK (vazio)` na tabela.

### Reordenar banco
1. **🏦 Bancos ▾** → clique em **⬇️** ao lado de `BANCO DO BRASIL`.
2. Feche o menu → a ordem dos grupos na tabela mudou.
3. Recarregue a página → a ordem persiste.

### Cadastrar categoria (feedback imediato)
1. **📂 Categorias ▾** → **➕ Cadastrar nova categoria** → `NUBANK - CARTÃO` → Enter.
2. Feche o menu → a categoria aparece dentro do grupo 🏦 NUBANK.

### Mover categoria
1. **📂 Categorias ▾** → **🔀 Mover** ao lado de `RICO - PROVENTOS`.
2. Escolha `🏦 INTER` → **✔ Mover** → a categoria vira `INTER - PROVENTOS` e muda de grupo.

### Editar célula
1. Clique em qualquer célula da tabela.
2. Digite o novo valor (ex.: `1500,50`) → **Enter**.
3. A célula fica destacada e o total se atualiza.

### Adicionar período
1. **📅 Períodos ▾** → **➕ Adicionar ano** → `2028` → Enter.
2. Novo ano aparece no filtro e as 12 colunas são criadas na tabela.

---

## 🛠️ Tecnologias

- **HTML + CSS + JavaScript puro** (sem frameworks).
- **Chart.js 4.4** (via CDN).
- **`localStorage`** para persistência.
- **Python 3 + SQLite** (opcional, `importar_dados.py`).

---

## 🐍 Script Python (opcional)

O `importar_dados.py` permite gerar um banco SQLite (`dados.db`) a partir do `README.md` bruto.

```bash
python importar_dados.py
```

Ele cria 3 tabelas normalizadas:
- `categorias` — lista de instituições/ativos.
- `periodos` — meses de 2023 a 2026 (do arquivo original).
- `valores` — relação `categoria × período × valor`.

---

## 📌 Próximos passos (ideias)

- [ ] Drag and drop para reordenar bancos/categorias.
- [ ] Import/Export geral (bancos + categorias + períodos + valores) em um único JSON.
- [ ] Comparação de anos (uma linha por ano no gráfico).
- [ ] Ordenação por coluna ao clicar no cabeçalho.
- [ ] Exportar para Excel (`.xlsx`).

---

## 📜 Licença

Uso pessoal. Dados financeiros privados — não redistribuir.