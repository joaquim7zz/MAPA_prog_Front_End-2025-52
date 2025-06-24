// Função para obter o valor da URL
function obterURL(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

// Quando a página carregar, exibe a mensagem de agradecimento
window.addEventListener('load', function () {
    const nome = obterURL('nome');

    if (nome) {
        // Mensagem de agredecimento
        const mensagemAgradecimento = `Olá, ${nome}! Muito obrigado por testar o site até aqui!`;

        const exibeMensagem = document.querySelector('.mensagem');

        //exibe a mensagem na tela do cliente 
        if (exibeMensagem) {
            exibeMensagem.innerHTML = mensagemAgradecimento;
            exibeMensagem.style.display = 'block'
        }
    }
});