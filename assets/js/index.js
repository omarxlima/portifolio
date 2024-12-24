// index.js

// Importa funções dos módulos
import { fetchProjects } from './projects.js';
import { handleScroll, smoothScrollLinks } from './scroll.js';

// Chama a função para buscar e carregar os projetos
fetchProjects();

// Inicializa o comportamento de rolagem suave e o efeito de transparência no menu
handleScroll();
smoothScrollLinks();
