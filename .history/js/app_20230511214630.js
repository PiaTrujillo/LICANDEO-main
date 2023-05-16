//para que el menu desaparezca//
const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnYerbaMate = document.querySelector('.yerbamate');
const btnMates = document.querySelector('.mates');
const btnBombillas = document.querySelector('.bombilla');
const btnAccesorios = document.querySelector('.accesorios');
const contenedorProductos = document.querySelector('.platillos');

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
    let productosArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto=> productosArreglo = [...productosArreglo,producto]);

    const yerbamate = productosArreglo.filter(yerbamate=> yerbamate.getAttribute('data-producto') === 'yerbamate');
    const mates = productosArreglo.filter(mates => mates.getAttribute('data-producto') === 'mates');
    const bombilla = productosArreglo.filter(bombilla => bombilla.getAttribute('data-producto') === 'bombilla');
    //const accesorios = productosArreglo.filter(accesorios=> accesorios.getAttribute('data-producto') === 'accesorios');

    //mostrarProductos(yerbamate, mates, bombilla, accesorios, productosArreglo);

}

const mostrarProductos = (yerbamate, mates, bombilla, accesorios, todos) =>{
    btnYerbamate.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        yerbamate.forEach(yerbamate=> contenedorProductos.appendChild(yerbamate));
    });

    btnMates.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        mates.forEach(mates=> contenedorProductos.appendChild(mates));
    });

    btnBombilla.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        bombilla.forEach(bombilla=> contenedorProductos.appendChild(bombilla));
    });
    btnAccesorios.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        accesorios.forEach(accesorios=> contenedorProductos.appendChild(accesorios));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todos=> contenedorProductos.appendChild(todos));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}