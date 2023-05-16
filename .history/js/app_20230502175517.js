//para que el menu desaparezca//
const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}
//esta funcion realiza que al momento de dar click al menu de hamburguesa se habilite el menu//
const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}
//Esta funciones es para que el menu de navegacion se cierre/
const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
}