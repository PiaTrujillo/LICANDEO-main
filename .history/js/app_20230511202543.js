//para que el menu desaparezca//
const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');

document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
    productos();
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

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
        }
    });
});


// imagenes de la pagina//
imagenes.forEach(imagen=>{

    imagen.src = imagen.dataset.src;
    observer.unobserve(imagen);
});
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
const productos = () =>{
    let productososArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto=> productoArreglo = [...productoArreglo,producto]);

    console.log(productosArreglo);

    //const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensalada');
    //const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    //const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    //const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');

    //mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);

}