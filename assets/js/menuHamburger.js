// Adiciona um "ouvinte" que executa todo o código somente após o HTML da página ser completamente carregado e analisado.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos essenciais do DOM: o botão hamburger, o menu de navegação e os links dentro dele.
    const hamburgerButton = document.getElementById('menu-hamburger');
    const navMenu = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.main-nav_link');

    /**
     * Função reutilizável para fechar o menu de navegação.
     * Ela remove as classes que ativam o menu e a animação do botão, e atualiza o atributo de acessibilidade.
     */
    const closeMenu = () => {
        navMenu.classList.remove('active'); // Esconde o menu lateral
        hamburgerButton.classList.remove('open'); // Reverte a animação do botão para o ícone de hamburger
        hamburgerButton.setAttribute('aria-expanded', 'false'); // Informa aos leitores de tela que o menu está fechado
    };

    /**
     * Função principal que alterna o estado do menu (abre se estiver fechado, fecha se estiver aberto).
     */
    const toggleMenu = () => {
        // Verifica o estado atual do menu através do atributo ARIA 'aria-expanded'.
        const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            // Se o menu já está expandido (aberto), chama a função para fechá-lo.
            closeMenu();
        } else {
            // Se o menu está fechado, abre-o.
            navMenu.classList.add('active'); // Adiciona a classe que mostra o menu (ex: deslizando da direita)
            hamburgerButton.classList.add('open'); // Adiciona a classe que anima o botão para um "X"
            hamburgerButton.setAttribute('aria-expanded', 'true'); // Informa aos leitores de tela que o menu está aberto
        }
    };

    // Verifica se os elementos do menu (botão e o próprio menu) existem na página para evitar erros.
    if (hamburgerButton && navMenu) {

        // Adiciona um evento de clique ao botão hamburger.
        hamburgerButton.addEventListener('click', (e) => {
            // Impede que o evento de clique "borbulhe" para o 'document'.
            // Sem isso, o clique no botão seria interpretado como um "clique fora do menu", fechando-o imediatamente após abrir.
            e.stopPropagation(); 
            toggleMenu(); // Chama a função para abrir ou fechar o menu.
        });

        // Adiciona um evento de clique para cada link dentro do menu.
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Se o menu estiver ativo (aberto), fecha-o.
                // Isso é uma boa prática de UX, pois ao clicar em um link, o usuário espera ser levado a outra seção e o menu deve fechar.
                if (navMenu.classList.contains('active')) {
                    closeMenu();
                }
            });
        });

        // Adiciona um evento de clique ao documento inteiro para fechar o menu ao clicar fora dele.
        document.addEventListener('click', (e) => {
            // A condição verifica três coisas:
            // 1. O menu está aberto? )
            // 2. O clique NÃO foi dentro do menu?)
            // 3. O clique NÃO foi no próprio botão hamburger?)
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
                // Se todas as condições forem verdadeiras, significa que o usuário clicou fora da área do menu.
                closeMenu();
            }
        });

    }
});