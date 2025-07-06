# Conecta Construção

## 📌 Visão Geral

**Conecta Construção** é um site institucional fictício desenvolvido como parte da disciplina de **Programação Front-End** no curso de **Engenharia de Software**. O objetivo foi criar uma experiência web completa, responsiva e interativa para simular o ambiente de um e-commerce do setor de materiais de construção.

O site apresenta os serviços da empresa, um catálogo de produtos e uma página de contato com validação de formulário.  

📎 **Acesse o site:** [mapa-prog-front-end-2025-52.vercel.app](https://mapa-prog-front-end-2025-52.vercel.app/)  

---


## 🎯 Objetivos do Projeto

- Criar um site responsivo com layout adaptável de 1920x1080 até 320x568 pixels.
- Utilizar HTML5, CSS3 e JavaScript para estruturar, estilizar e adicionar interatividade.
- Aplicar boas práticas de organização e semântica no código.
- Exercitar o design responsivo com foco na experiência do usuário.

---

## 📁 Estrutura de Arquivos

```plaintext
/
├── index.html                  # Página inicial
├── pages/
│   ├── sobre.html
│   ├── produtos.html
│   ├── contato.html
│   └── mensagem.html
├── assets/
│   ├── css/
│   │   ├── reset.css           # Reset de estilos
│   │   ├── global.css          # Header, footer, menu e fontes
│   │   ├── responsive.css      # Media queries
│   │   ├── style-index.css     # Estilo da home
│   │   ├── style-sobre.css     # Estilo da página Sobre
│   │   ├── style-produtos.css  # Estilo da página Produtos
│   │   └── style-contato.css   # Estilo da página Contato
│   ├── js/
│   │   ├── script.js           # Validação do formulário
│   │   └── menuHamburger.js    # Lógica do menu mobile
│   └── img/
│       ├── logo/               # Logo e favicon
│       └── produtos/           # Imagens dos produtos
└── Leia-me.txt

---
```

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do conteúdo, utilizando tags como `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`.
- **CSS3:** Estilização visual, animações e construção de um design responsivo com `media queries`.
- **JavaScript:** Implementação da interatividade, como validação do formulário de contato e controle do menu "hamburger".
- **Font Awesome:** Biblioteca usada para inclusão de ícones decorativos e funcionais.
- **Git & GitHub:** Controle de versão e hospedagem do repositório.
- **Vercel:** Plataforma utilizada para deploy e hospedagem do site.

---

## ⚙️ Funcionalidades e Conceitos Aplicados

### 🎨 Design e Interatividade

- **Paleta de Cores:** Azul (confiança), branco e cinza claro (leitura), laranja e amarelo (chamadas à ação).
- **Efeitos de Hover:** Feedback visual em botões, links e cards para aprimorar a usabilidade.
- **Design Responsivo:** Abordagem *desktop-first*, com adaptação para telas menores (tablets e smartphones) via *media queries*.

### 🧠 Funcionalidades em JavaScript

- **Menu Hamburger:** Ativado por clique, alterna o ícone para um "X" e fecha automaticamente ao clicar fora da área ou em um link.
- **Validação de Formulário:** O botão de envio permanece desabilitado até o preenchimento completo dos campos obrigatórios, com realce visual nos campos válidos.
- **Mensagem Personalizada:** Após o envio do formulário, o usuário é redirecionado para uma página de agradecimento com o nome capturado via parâmetros da URL.
- **Manipulação do DOM:** Eventos como cliques e digitação são tratados com funções JavaScript que interagem diretamente com o DOM.

---

## Erro ao executar localmente

Se o JavaScript não funcionar corretamente na versão local (devido a restrições do navegador), siga uma das opções abaixo:

### ✅ 1. Acesse a versão online

👉 [https://mapa-prog-front-end-2025-52.vercel.app/](https://mapa-prog-front-end-2025-52.vercel.app/)

### ✅ 2. Execute localmente com Live Server

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no Visual Studio Code.
2. Abra a pasta do projeto no VS Code.
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

---

