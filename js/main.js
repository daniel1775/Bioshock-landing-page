
// Mantener item activo
let enlaces = document.querySelectorAll('.nav__opciones li a');
enlaces.forEach((element) => {

    element.addEventListener('click', (evento) => {

        enlaces.forEach((link) => {
            link.classList.remove('nav__activo');
        });
        evento.target.classList.add('nav__activo');

    });
});

// Esconder barra de menu
let prevScrollPos = window.pageYOffset;
let containerMenu = document.querySelector('.nav');


window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    // Mostrar y ocultar menu
    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    } else {
        containerMenu.style.top = "-150px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currentScrollPos;

    // Mostrar y ocultar scroll Estilos
    let arriba = window.pageYOffset;
    if (arriba <= 600) {
        containerMenu.style.borderBottom = "none";

    } else {
        containerMenu.style.borderBottom = "solid 5px #0A76A5";
    }
}