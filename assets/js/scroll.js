// scroll.js

// Efeito de transparência no menu durante a rolagem
export const scrollFunction = () => {
    const navbar = document.getElementById("navbar");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
};

// Adiciona o evento de rolagem
export const handleScroll = () => {
    window.onscroll = function() {scrollFunction()};
};

// Rolagem suave para os links
export const smoothScrollLinks = () => {
    // Rolagem suave para o link "Início"
    document.querySelector('a[href="#top"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Rolagem suave para os outros links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
