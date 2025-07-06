```markdown
# Projeto Conecta Construção

## Visão Geral

O "Conecta Construção" é um projeto de site institucional fictício para uma loja de materiais de construção, desenvolvido como parte da disciplina de Programação Front-End do curso de Engenharia de Software. O objetivo principal foi criar uma experiência web completa, responsiva e interativa, simulando um ambiente real de um e-commerce do setor.

O site apresenta os serviços da empresa, um catálogo de produtos e uma página de contato funcional. O projeto foi desenvolvido por Joaquim de Sena Silva.

**Acesse o site:** [https://mapa-prog-front-end-2025-52.vercel.app/](https://mapa-prog-front-end-2025-52.vercel.app/)

**Repositório do projeto:** [https://github.com/joaquim7zz/MAPA_prog_Front_End-2025-52](https://github.com/joaquim7zz/MAPA_prog_Front_End-2025-52)

---

## Capturas de Tela

| Página Inicial - Desktop | Página Inicial - Mobile |
| :---: | :---: |
| ![Tela inicial desktop](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/desktop-home.png) | ![Tela inicial mobile](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/mobile-home.png) |
| **Produtos - Desktop** | **Produtos - Mobile** |
| ![Tela de produtos desktop](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/desktop-produtos.png) | ![Tela de produtos mobile](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/mobile-produtos.png) |
| **Contato - Desktop** | **Menu Hamburger - Mobile** |
| ![Tela de contato desktop](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/desktop-contato.png) | ![Menu hamburger aberto](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/mobile-menu.png) |
| **Mensagem de Agradecimento - Desktop** | **Página Sobre - Desktop** |
| ![Tela de mensagem desktop](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/desktop-mensagem.png) | ![Tela sobre desktop](httpsa//file.garden/Z826x7-y52V-J2dJ/ConectaConstrucao/desktop-sobre.png) |

---

## Objetivos do Projeto

* Desenvolver uma página web responsiva que se adapte desde telas de 1920x1080 pixels até 320x568 pixels.
* Construir, estilizar e adicionar interatividade utilizando HTML5, CSS3 e JavaScript.
* Aplicar boas práticas de desenvolvimento e estruturação de código.
* Praticar conceitos de design responsivo para múltiplos dispositivos.

---

## Estrutura de Arquivos

O projeto está organizado da seguinte maneira para garantir clareza e manutenibilidade:

```

/
├── index.html                \# Página principal
├── pages/
│   ├── sobre.html
│   ├── produtos.html
│   ├── contato.html
│   └── mensagem.html
├── assets/
│   ├── css/
│   │   ├── reset.css         \# Reset de estilos padrão dos navegadores
│   │   ├── global.css        \# Estilos globais (header, footer, menu)
│   │   ├── responsive.css    \# Media queries para responsividade
│   │   ├── style-index.css     \# Estilos da página principal
│   │   ├── style-sobre.css     \# Estilos da página "Sobre"
│   │   ├── style-produtos.css  \# Estilos da página de produtos
│   │   └── style-contato.css   \# Estilos da página de contato
│   ├── js/
│   │   ├── script.js         \# Validação do formulário e mensagem personalizada
│   │   └── menuHamburger.js  \# Lógica do menu hamburger
│   └── img/
│       ├── logo/             \# Logo e favicon
│       └── produtos/         \# Imagens dos produtos
└── Leia-me.txt

```


---

## Tecnologias Utilizadas

* **HTML5:** Utilizado para a estruturação semântica do conteúdo, com o uso de tags como `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`.
* **CSS3:** Aplicado para toda a estilização visual, animações e a criação do design responsivo através de `media queries`.
* **JavaScript:** Utilizado para a interatividade da página, como a validação do formulário de contato e a manipulação do menu "hamburger".
* **Font Awesome:** Implementado para adicionar ícones decorativos.
* **Git e GitHub:** Para o controle de versão do projeto.
* **Vercel:** Plataforma utilizada para a publicação e deploy do site.

---

## Funcionalidades e Conceitos Aplicados

### Design e Interatividade
* **Paleta de Cores:** O design foi projetado para ser limpo e intuitivo. O **azul** transmite confiança, o **branco e cinza claro** facilitam a leitura, e os tons de **laranja e amarelo** são usados em botões para atrair a atenção.
* **Efeitos de Hover:** Efeitos de `hover` foram aplicados em links, botões e cards para fornecer feedback visual ao usuário, melhorando a experiência de navegação.
* **Design Responsivo:** O layout foi construído com uma abordagem *desktop-first*, adaptando-se a diferentes tamanhos de tela (desktops, tablets e smartphones) através de *media queries*.

### JavaScript
* **Menu Hamburger:** Um menu "hamburger" foi implementado para garantir uma navegação fluida em dispositivos móveis. O menu é acionado por um clique, transforma o ícone em um "X" e pode ser fechado clicando em um link ou fora da área do menu.
* **Validação de Formulário:** Na página de contato, o botão de envio permanece desabilitado até que todos os campos obrigatórios sejam preenchidos. Os campos preenchidos recebem um destaque visual, fornecendo um feedback instantâneo ao usuário.
* **Mensagem Personalizada:** Após o envio bem-sucedido do formulário, o usuário é redirecionado para uma página de agradecimento que exibe seu nome, capturado a partir dos parâmetros da URL.
* **Manipulação do DOM:** A interatividade do site foi desenvolvida através da manipulação direta do DOM, associando funções a eventos como cliques e entradas de dados nos formulários.

---

## Como Executar o Projeto Localmente

Caso encontre algum problema com o JavaScript na versão local, tente uma das seguintes opções:

1.  **Acessar a versão online:**
    [https://mapa-prog-front-end-2025-52.vercel.app/](https://mapa-prog-front-end-2025-52.vercel.app/)

2.  **Executar com a extensão Live Server no VS Code:**
    * Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no Visual Studio Code.
    * Abra a pasta do projeto no VS Code.
    * Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
```
