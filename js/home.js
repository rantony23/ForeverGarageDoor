// BUTTON PANEL3

const btnleft =document.querySelector('.iconos-left');
const btnright=document.querySelector('.iconos-right');

const slider = document.getElementById('panel3');
const images = document.querySelectorAll('.slider-button');

btnleft.addEventListener("click",e => moveToLeft());
btnright.addEventListener("click",e => moveToRight());

setInterval(()=>{
    moveToRight()
},5000);

let operacion=0;
let widthImg = 600/images.length;
let counter =0;

function moveToRight(){
    if(counter >=images.length-1){
        operacion = 0;
        counter=0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
    }else{
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition= "all ease .6s";
    };
}
function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = images.length-1;
        operacion = widthImg*(images.length);
        console.log(operacion);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
    }else{
        operacion = operacion- widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition="all ease .6s";
    }
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

// LOGOS
let logosCompanies = document.getElementById('logos-companies');
let prevScreenSizeIsMobile = window.innerWidth <= 768;

function checkScreenSize() {
    if (window.innerWidth <= 768) {
        logosCompanies.classList.add('ocultar');
        prevScreenSizeIsMobile= true;
    } else {
        if(prevScreenSizeIsMobile){
            reset();
        }
        logosCompanies.classList.remove('ocultar');
        prevScreenSizeIsMobile =false;
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();




const deslizar = document.getElementById('logos-companies');
const logos = document.querySelectorAll('.slider-div');


let oper=0;
let widthLogos = 100/logos.length;
let contador =0;
console.log(widthLogos);
function moveToDerecha(){
    if(contador >=3){
        oper = 0;
        contador=0;
        deslizar.style.transform = `translate(-${oper}%)`;
        deslizar.style.transition = "none"
    }else{
        contador++;
        oper = oper + widthLogos;
        deslizar.style.transform = `translate(-${oper}%)`;
        deslizar.style.transition= "all ease .6s";
    };
}
function addClickEvent() {
    const right = document.querySelector('.ocultar');
    if (right) {
        right.removeEventListener("click", moveToDerecha);
        right.addEventListener("click",moveToDerecha);
    }
}
addClickEvent();

setInterval(() => {
    if (logosCompanies.classList.contains('ocultar')) {
        moveToDerecha();
    }
}, 2000);
function reset() {
    oper = 0;
    contador = 0;
    deslizar.style.transform = `translate(0%)`;
    deslizar.style.transition = 'none';
}