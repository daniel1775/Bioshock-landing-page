var mediaqueryList = window.matchMedia("(max-width: 450px)");
let menu = document.querySelector(".nav__opciones");
let btn_menu = document.querySelector("#btn-menu");
let enlaces = document.querySelectorAll('.nav__opciones li a');
let prevScrollPos = window.pageYOffset;
let containerMenu = document.querySelector('.nav');
let body = document.body;

// Mantener item activo
enlaces.forEach((element) => {
    element.addEventListener('click', (evento) => {
        if(mediaqueryList.matches){
            menu.style.transform = "translateX(-100%)";
            btn_menu.click();
        }
        enlaces.forEach((link) => {
            link.classList.remove('nav__activo');
        });
        evento.target.classList.add('nav__activo');
    });
});

// Efecto despliegue
btn_menu.addEventListener('change', (evento) => {
    if(btn_menu.checked){
        menu.style.transform = "translateX(0%)";
        body.style.overflowY = 'hidden';
    }else{
        menu.style.transform = "translateX(-100%)";
        body.style.overflowY = 'scroll';
    }
});

// Esconder barra de menu
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
    if (arriba <= 650) {
        containerMenu.style.borderBottom = "none";

    } else {
        containerMenu.style.borderBottom = "solid 2px #000000";
    }
}