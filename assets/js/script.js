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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const inputs = ['nome', 'email', 'assunto', 'mensagem'].map(id => document.getElementById(id));
    const botaoEnviar = form.querySelector('.botao-enviar');
    
    const liberaBotao = () => {
        const allFilled = inputs.every(input => input.value.trim() !== '');
        
        botaoEnviar.disabled = !allFilled;
        botaoEnviar.style.cssText = allFilled 
            ? 'cursor: pointer; background-color: #0056b3; opacity: 1'
            : 'cursor: not-allowed; background-color: #cccccc; opacity: 0.7';
    };
    
    liberaBotao(); // Estado inicial
    inputs.forEach(input => input.addEventListener('input', liberaBotao));
}); 