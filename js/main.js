const handleScrollButtonClick = (event) => {
    const container = event.target.closest(".contenedor-imagenes").querySelector(".Scroll-images");

    // Definir el valor de desplazamiento predeterminado
    let scrollAmount = 500;

    // Verificar la media query para modificar el desplazamiento
    if (window.matchMedia("(max-width: 480px)").matches) {
        scrollAmount = 302; // No desplazarse en pantallas menores a 768px
    }

    const direction = event.target.classList.contains("reversa") ? 1 : -1;
    container.scrollLeft += direction * scrollAmount;
};

const scrollButtons = document.querySelectorAll(".siguiente, .reversa");

scrollButtons.forEach(button => {
    button.addEventListener("click", handleScrollButtonClick);
});