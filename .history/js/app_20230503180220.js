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
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}
//Funcion para cerrar el menu de navegacion//
const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
         //Cerrar navegacion//
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        //Cerrar navegacion//
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}