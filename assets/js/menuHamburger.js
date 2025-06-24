
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('menu-hamburger');
    const navMenu = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.main-nav_link');

    // Função para fechar o menu
    const closeMenu = () => {
        navMenu.classList.remove('active');
        hamburgerButton.classList.remove('open');
        hamburgerButton.setAttribute('aria-expanded', 'false');
    };

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeMenu();
        } else {
            navMenu.classList.add('active');
            hamburgerButton.classList.add('open');
            hamburgerButton.setAttribute('aria-expanded', 'true');
        }
    };

    // Verifica se o botão e o menu existem
    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Adiciona evento para fechar o menu ao clicar em um dos links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    closeMenu();
                }
            });
        });

        // Adiciona evento para fechar o menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
                closeMenu();
            }
        });

    }
});