
// Agrega el evento mouseover a cada elemento .nav-item
document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener("mouseover", function() {
        // Muestra el menú desplegable correspondiente al elemento .nav-item
        this.querySelector('.dropdown-menu').classList.add('show');
    });
});

// Agrega el evento mouseleave a cada elemento .nav-item
document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener("mouseleave", function() {
        // Oculta el menú desplegable correspondiente al elemento .nav-item
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});

document.querySelectorAll('.nav-item').forEach(function(item) {
    // Alterna la visibilidad del menú desplegable al hacer clic en el elemento .nav-item
    item.addEventListener("click", function(event) {
        // Evita que el clic en el menú desplegable cierre el menú inmediatamente
        event.stopPropagation();
        
        // Encuentra el menú desplegable correspondiente al elemento .nav-item
        let dropdownMenu = this.querySelector('.dropdown-menu');
        
        // Alterna la clase 'show' para mostrar u ocultar el menú desplegable
        dropdownMenu.classList.toggle('show');
    });
});

// Cierra cualquier menú desplegable abierto al hacer clic en cualquier parte del documento
document.addEventListener("click", function() {
    // Encuentra todos los menús desplegables
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        // Remueve la clase 'show' de cada menú desplegable
        menu.classList.remove('show');
    });
});

// BUTTON PANEL3

const btnleft =document.querySelector('.iconos-left');
const btnright=document.querySelector('.iconos-right');

const slider = document.getElementById('panel3');
const images = document.querySelectorAll('.slider-button');

btnleft.addEventListener("click",e => moveToLeft());
btnright.addEventListener("click",e => moveToRight());
let operacion=0;
let widthImg = 300/images.length;
let counter =0;

function moveToRight(){
    if(counter >=images.length-1){
        operacion = 0;
        counter=0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
    }else{
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition= "all ease .6s";
    };
}
function moveToLeft(){
    operacion = operacion- widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition="all ease .6s";
}

// SLIDER IMG
// script.js
let esconder=document.querySelector(".text-panel1");
window.addEventListener('load', function() {
    setTimeout(function() {
        esconder.style.opacity= "0";
        document.querySelector('.sliding-div').classList.add('active');
    }, 3000); // 3000 ms = 3 segundos
});
