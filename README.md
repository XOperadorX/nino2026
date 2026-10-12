# nino2026 — Controle Financeiro Pessoal

Planilha de controle de patrimônio, investimentos e recebimentos mensais, com dados de **janeiro/2023 a dezembro/2026**.

---

## 📂 Estrutura

```
📂 nino2026/
 ├── 📄 index.html
 ├── 🎨 style.css
 ├── 🧩 app.js
 └── 📄 README.md
```

---

## 🚀 Como usar

1. Salve os 4 arquivos na **mesma pasta**.
2. Dê **duplo clique** em `index.html`.
3. Pronto — os dados estão embutidos no `app.js`, **não precisa de servidor**.

> ⚠️ O gráfico usa o **Chart.js via CDN** — precisa de conexão à internet na primeira carga.

---

## ✨ Funcionalidades

### 📈 Gráfico de evolução
- Chart.js de linha mostrando o **TOTAL DO PATRIMÔNIO** por mês.
- Ao **filtrar por banco**, mostra a **soma das categorias do banco**.
- Ao **filtrar por categoria**, mostra **aquela categoria específica**.
- Cores adaptadas ao tema claro/escuro.
- Botão **▼/▲** para ocultar/mostrar.

### 🔄 Sincronização Banco ↔ Categoria
- **Seleciona banco** → select de categoria mostra só as categorias daquele banco.
- **Seleciona categoria** → banco é auto-selecionado para o pai dela.
- Se a categoria não pertence a nenhum banco, o filtro de banco é **limpo**.

### 🏦 Menu Bancos
- ➕ **Cadastrar novo banco**
- ✏️ **Alterar** (inline)
- 🗑️ **Excluir** (com confirmação)
- ↺ **Restaurar padrão**
- Salvo em `localStorage`.

### 📂 Menu Categorias
- ➕ **Cadastrar nova categoria** (aparece como `—` até editar `app.js`)
- ✏️ **Alterar** (renomeia — alias visual, mantém os valores originais)
- 🗑️ **Excluir** (oculta da tabela)
- ↺ **Restaurar padrão**
- Salvo em `localStorage`.

### 🔍 Filtros
- 🏦 **Banco** — lista personalizável, agrupada.
- 🏷️ **Categoria** — com `<optgroup>` por banco.
- 📅 **Período** — mês/ano.
- 🔎 **Buscar** — por texto.
- ➕➖ **Mostrar** — todos/positivos/negativos/sem zero.

### 📊 Cards
- Categorias, períodos, células exibidas, soma, maior e menor valor (do filtro atual).

### 📌 Outros
- Cabeçalho e primeira coluna fixos.
- ⬇️ **Exportar CSV** (separador `;` + BOM UTF-8).
- 🌗 **Tema claro/escuro automático**.

---

## 💾 Armazenamento

Tudo é salvo no **`localStorage`** do navegador:

| Chave | Conteúdo |
|---|---|
| `nino2026_bancos` | Lista de bancos |
| `nino2026_categorias_hidden` | Categorias ocultas |
| `nino2026_categorias_alias` | Renomeações (alias) |
| `nino2026_categorias_custom` | Categorias personalizadas |

---

## 🛠️ Tecnologias

- **HTML + CSS + JavaScript puro**
- **Chart.js 4.4** (via CDN)
- **`localStorage`** para persistência

---

## 📜 Licença

Uso pessoal. Dados financeiros privados — não redistribuir.