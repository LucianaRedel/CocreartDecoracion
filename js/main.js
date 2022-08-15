
// Incorporacion y modificaciones clase DOM
// Desarrollo de carrito de compras segun lo visto en la clase con Emiliano, 12 Agosto 2022

let carritoDeCompras = []

// Variables globales a utilizar 

const contenedorProductos=document.getElementById('contenedor-productos');
const contenedorCarrito=document.getElementById('carrito-contenedor');

const contadorCarrito=document.getElementById('carrito-contador');
const precioTotal=document.getElementById('precioTotal');

const seleccionModelos=document.getElementById('seleccion-modelos');
const buscador=document.getElementById('buscar');

// Filtro inicial de la pagina

seleccionModelos.addEventListener('change', ()=>{
    if(seleccionModelos.value === 'all'){
        crearItems(productos)
    }
    else{
        crearItems(productos.filter (item=> item.nombre === seleccionModelos.value))
    }
})

crearItems(productos);


function crearItems(array){
    contenedorProductos.innerHTML='' // vaciar el contenedor para mostrar solo la seleccion de items que viene de seleccion modelos
    array.forEach(item => {
        let div = document.createElement('div') // Creacion del NODO
        div.className='producto' //Accedes al elemento que creas y le agregas la clase que le corresponde
        div.innerHTML=`<div class="card" style="width: 18rem;">
                       <img src="${item.imagen}" class="card-img-top" alt="...">
                       <div class="card-body">
                       <h5 class="card-title">${item.nombre}</h5>
                       <p class="card-text">${item.descripcion}</p>
                       <p class="card-text">${item.disponibilidad}</p>
                       <p class="card-text">Precio $${item.precio}</p>
                       <a href="#" id="botonAgregar${item.id}" class="btn btn-primary">Agregar a la compra</a>
                       </div>
                       </div>
                       ` // Estructura del NODO
    contenedorProductos.appendChild(div)

    let btnAgregar=document.getElementById(`botonAgregar${item.id}`)
    btnAgregar.addEventListener('click',()=>{
        agregarCarrito(item.id);
    })

    })

}


function agregarCarrito(id){
    let existeItem=carritoDeCompras.find(item=> item.id === id)
    if(existeItem){
        existeItem.cantidad = existeItem.cantidad + 1
        existeItem.stock = existeItem.stock--
        document.getElementById(`cant${existeItem.id}`).innerHTML = `<p id="cant${existeItem.id}">Cantidad: ${existeItem.cantidad}</p>`
        actualizarCarrito()
    }
    else{
        let productoElegido=productos.find(item=> item.id === id)
        productoElegido.cantidad = 1
        productoElegido.stock = productoElegido.stock--
        carritoDeCompras.push(productoElegido);
        mostrarCarrito(productoElegido)
        actualizarCarrito()
    }
    

}

function mostrarCarrito(productoElegido){
    let div=document.createElement('div')
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML=`<p>${productoElegido.nombre}</p>
                   <p id="cant${productoElegido.id}">Cantidad:${productoElegido.cantidad}</p>
                   <p>Precio unitario: $${productoElegido.precio}</p>
                   <button class="boton-eliminar" id="eliminar${productoElegido.id}">
                   <i class="fas fa-trash-alt"></i>
                   </button>
                   `
    contenedorCarrito.appendChild(div)

    let btnEliminar=document.getElementById(`eliminar${productoElegido.id}`)
    btnEliminar.addEventListener('click', ()=>{
        if(productoElegido.cantidad === 1){
            carritoDeCompras=carritoDeCompras.filter(item => item.id !== productoElegido.id)
            btnEliminar.parentElement.remove() // Es el padre del elemento eliminar
            actualizarCarrito()
        }
        else{
            productoElegido.cantidad = productoElegido.cantidad - 1
            document.getElementById(`cant${productoElegido.id}`).innerHTML=`<p id="cant${productoElegido.id}">Cantidad: ${productoElegido.cantidad}</p>`
            actualizarCarrito()
        }
    })

}


function actualizarCarrito(){
    contadorCarrito.innerText= carritoDeCompras.reduce((acc,item)=> acc + item.cantidad, 0)
    precioTotal.innerHTML= carritoDeCompras.reduce((acc,item)=> acc + (item.precio * item.cantidad), 0)

}




/*

// ` comillas invertidas para concatenar string, sin usar el + 
// += para que vaya agregando los usuarios y no se quede en solo el primero

let botonComprar = document.getElementById('comprar')
botonComprar.addEventListener('click', Comprar)


function Comprar(){

    let compra = [];


    const listadoDeProductos = () => {
        let mensaje = 'Seleccione el o los ítems para agregar a su compra'
        productos.forEach(item => {
            mensaje += `
                Opción ${item.id}, ${item.nombre}, Stock ${item.stock}, Precio final $ ${item.precio}, Disponibilidad ${item.disponibilidad}
            `
        })
        mensaje += `
                Opción 0: Salir sin selección de ítems o Finalizar la compra
            `
        let opcion = Number(prompt(mensaje))
        return opcion;
    
    }
    
    
    let comprar = true;
    
    while (comprar) {
        let opcion = listadoDeProductos()
        if (opcion >= 1 && opcion <= 8) {
            let productoElegido = productos.find(item => item.id === opcion)
            if (compra.length === 0) {
                productoElegido.cantidad = 1;
                productoElegido.stock--;
                compra.push(productoElegido);
    
            } else {
                let productoComprado = compra.find(item => item.id === opcion)
                if (productoComprado) {
                    if(productoComprado.stock === 0){
                        alert ('No hay stock disponible')
                    }
                    else{
                        productoComprado.cantidad++;
                        productoComprado.stock--;
                    }
                   
                } else {
                    productoElegido.cantidad = 1;
                    productoElegido.stock--;
                    compra.push(productoElegido);
                }
            }
        } else {
            comprar = false;
        }
    
    }
    
    const mostrarTotalCompra = () => {
        let mensajeCompra = "";
        if (compra.length > 0) {
            compra.forEach(item => {
                mensajeCompra += `
                Producto ${item.nombre}, Cantidad ${item.cantidad}, Subtotal producto $ ${item.precio * item.cantidad}
                `
            })
            mensajeCompra += `
                Total compra $ ${compra.reduce ((total, item) => total + (item.precio * item.cantidad),0)}
                `
            alert(mensajeCompra)
        } else {
            mensajeCompra += 'No hay ítems seleccionados'
            alert(mensajeCompra)
        }
    }
    
    mostrarTotalCompra();



}

*/







