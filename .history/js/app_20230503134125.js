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
    //Metodo para colocar una X al menu de navegacion//
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}
//Funcion para cerrar el menu de navegacion//
const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
    });
}