document.addEventListener("DOMContentLoaded", () => {
    const footers = document.querySelectorAll(".modulo-footer");

    footers.forEach((footer) => {
        footer.addEventListener("click", () => {
            // Buscamos el módulo padre de este footer
            const modulo = footer.closest(".proyecto-modulo");
            const contenido = modulo.querySelector(".modulo-content");
            const flecha = footer.querySelector(".flecha");

            // Alternamos la clase 'active' para la animación
            modulo.classList.toggle("active");

            // Lógica para que la altura sea fluida
            if (modulo.classList.contains("active")) {
                // Si se abre, calculamos el alto total del contenido interno
                contenido.style.maxHeight = contenido.scrollHeight + "px";
                contenido.style.padding = "40px 40px";
                flecha.style.transform = "rotate(180deg)";
            } else {
                // Si se cierra, volvemos a cero
                contenido.style.maxHeight = "0";
                contenido.style.padding = "0 40px";
                flecha.style.transform = "rotate(0deg)";
            }
        });
    });
});