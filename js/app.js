const tabButtons = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedModule = button.dataset.module;

    // Quitar clase active a todos los botones
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    // Mostrar / ocultar proyectos
    projectCards.forEach((card) => {
      if (card.dataset.module === selectedModule) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// === CATEGORÍA ACTIVA POR DEFECTO ===
const defaultModule = 'python';

// Activar botón Python
tabButtons.forEach((btn) => {
  btn.classList.toggle('active', btn.dataset.module === defaultModule);
});

// Mostrar solo proyectos Python al cargar
projectCards.forEach((card) => {
  card.style.display = card.dataset.module === defaultModule ? 'block' : 'none';
});
