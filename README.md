# *Projeto: SPA de Gerenciamento de Eventos*

## *Descrição*

*Esta é uma aplicação Single Page Application (SPA) desenvolvida com HTML, CSS e JavaScript puro, que consome a API de gerenciamento de eventos. A interface permite cadastrar, visualizar e excluir eventos de forma dinâmica.*

## *Instalação*

### *Requisitos:*

- *Navegador moderno (Chrome, Firefox, Edge)*
- *API rodando localmente em **`http://127.0.0.1:5000/`*

### *Passos:*

1. *Clone o repositório:*
   ```sh
   git clone https://github.com/seu-usuario/frontend-eventos.git
   cd frontend-eventos
   ```
2. *Abra o arquivo **`index.html`** no navegador.*

## Funcionalidades

- Listagem de eventos em cards dinâmicos.
- Cadastro de novos eventos via formulário.
- Exclusão de eventos ao clicar no botão de deletar.
- Consumo da API via chamadas assíncronas (AJAX/Fetch API).

## Estrutura do Projeto

```
frontend-eventos/
│-- index.html  # Página principal
│-- styles.css  # Estilos da aplicação
│-- script.js   # Lógica da SPA e chamadas à API
```

## Uso

1. Abra `index.html` no navegador.
2. Adicione eventos preenchendo o formulário e clicando em "Cadastrar".
3. Veja a lista de eventos na tela.
4. Clique em "Excluir" para remover um evento.

## Notas

- As chamadas à API são feitas usando JavaScript nativo (Fetch API).

