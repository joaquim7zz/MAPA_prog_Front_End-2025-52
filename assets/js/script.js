// --- Parte 1: Mensagem de Agradecimento Personalizada ---


function obterURL(nome) {
    // Cria um objeto para manipular os parâmetros da URL da janela atual.
    const urlParams = new URLSearchParams(window.location.search);
    // Retorna o valor associado ao parâmetro 'nome' fornecido.
    return urlParams.get(nome);
}

// Adiciona um "ouvinte" que executa uma função quando a página inteira (incluindo imagens e outros recursos) termina de carregar.
window.addEventListener('load', function () {
    // Chama a função para pegar o valor do parâmetro 'nome' da URL.
    const nome = obterURL('nome');

    // Verifica se o parâmetro 'nome' foi encontrado na URL.
    if (nome) {
        // Cria a mensagem de agradecimento personalizada usando o nome obtido.
        const mensagemAgradecimento = `Olá, ${nome}! Muito obrigado por testar o site até aqui!`;

        // Seleciona o elemento HTML com a classe 'mensagem' onde a mensagem será exibida.
        const exibeMensagem = document.querySelector('.mensagem');

        // Verifica se o elemento '.mensagem' realmente existe na página para evitar erros.
        if (exibeMensagem) {
            // Insere a mensagem de agradecimento dentro do elemento HTML.
            exibeMensagem.innerHTML = mensagemAgradecimento;
            // Altera o estilo do elemento para 'block' para torná-lo visível (provavelmente está com 'display: none' no CSS).
            exibeMensagem.style.display = 'block';
        }
    }
});


// --- Parte 2: Validação do Formulário de Contato ---

// Adiciona um "ouvinte" que executa uma função assim que o HTML da página é completamente carregado e analisado.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário pelo seu ID.
    const form = document.getElementById('form-contato');
    // Cria um array com todos os elementos de input/textarea necessários para a validação.
    const inputs = ['nome', 'email', 'assunto', 'mensagem'].map(id => document.getElementById(id));
    // Seleciona o botão de envio dentro do formulário.
    const botaoEnviar = form.querySelector('.botao-enviar');
    
    /**
     * Função que verifica se todos os campos estão preenchidos e habilita/desabilita o botão de envio.
     */
    const liberaBotao = () => {
        // A função 'every' verifica se TODOS os inputs no array passam na condição.
        // A condição é: o valor do input, sem espaços em branco no início ou fim (.trim()), não está vazio.
        const allFilled = inputs.every(input => input.value.trim() !== '');
        
        // Desabilita o botão se 'allFilled' for falso, e habilita se for verdadeiro.
        botaoEnviar.disabled = !allFilled;
        // Altera o estilo do botão com base no seu estado (habilitado ou desabilitado) usando um operador ternário.
        botaoEnviar.style.cssText = allFilled 
            ? 'cursor: pointer; background-color: #0056b3; opacity: 1' // Estilo para botão habilitado
            : 'cursor: not-allowed; background-color: #cccccc; opacity: 0.7'; // Estilo para botão desabilitado
    };
    
    // Chama a função uma vez no início para definir o estado inicial do botão (que será desabilitado).
    liberaBotao(); 
    
    // Adiciona um "ouvinte" de evento para CADA um dos inputs.
    // O evento 'input' é acionado toda vez que o valor do campo muda.
    inputs.forEach(input => input.addEventListener('input', liberaBotao));
});