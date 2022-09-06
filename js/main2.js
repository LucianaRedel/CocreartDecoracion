
// Para cargar una funcion cuando se carga el HTML que actualice el carrito de compras

document.addEventListener('DOMContentLoaded', ()=>{
      cargarCarritoLS() || [];   
})

// Desarrollo de carrito de compras segun lo visto en la clase con Emiliano, 12 Agosto 2022

let carritoDeCompras = []

let carritoDeStorage = getCarrito();


// Variables globales a utilizar 

const contenedorProductos=document.getElementById('contenedor-productos');
const contenedorCarrito=document.getElementById('carrito-contenedor');

const contadorCarrito=document.getElementById('carrito-contador');
const precioTotal=document.getElementById('precioTotal');

const seleccionModelos=document.getElementById('seleccion-modelos');
const buscador=document.getElementById('buscar');

// Filtro inicial de la pagina para seleccionar productos

seleccionModelos.addEventListener('change', ()=>{
    if(seleccionModelos.value === 'all'){
        crearItems(productos)
    }
    else{
        crearItems(productos.filter (item=> item.nombre === seleccionModelos.value))
    }
})

// Cargar los productos en la pagina

crearItems(productos);


function crearItems(array){
    contenedorProductos.innerHTML='' // vaciar el contenedor para mostrar solo la seleccion de items que viene de seleccion modelos
    array.forEach( item => {
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

// Incluir los items en el carrito de compras 

function agregarCarrito(id){
    let existeItem=carritoDeCompras.find(item=> item.id === id)
    if(existeItem){
        if(existeItem.stock === 0){
            alert('No hay stock')
        }else{
            existeItem.cantidad = existeItem.cantidad + 1
            existeItem.stock = existeItem.stock--
            document.getElementById(`cant${existeItem.id}`).innerHTML = `<p id="cant${existeItem.id}">Cantidad: ${existeItem.cantidad}</p>`
            actualizarCarrito()
        }       
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

// Mostrar el carrito de compras 

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

// Actualizar el carrito de compras con cantidad y total

function actualizarCarrito(){
    contadorCarrito.innerText= carritoDeCompras.reduce((acc,item)=> acc + item.cantidad, 0)
    precioTotal.innerHTML= carritoDeCompras.reduce((acc,item)=> acc + (item.precio * item.cantidad), 0)

    setCarrito();
}


function actualizarCarritoStorage(){
    contadorCarrito.innerText= carritoDeStorage.reduce((acc,producto)=> acc + producto.cantidad, 0)
    precioTotal.innerHTML= carritoDeStorage.reduce((acc,producto)=> acc + (producto.precio * producto.cantidad), 0)

    setCarrito();
}

// Guardar el carrito de compras en local storage 

function setCarrito(){
    localStorage.setItem('carritoGuardado', JSON.stringify(carritoDeCompras));
}

// Recuperar el carrito de compras de local storage 


function getCarrito(){
    if(JSON.parse(localStorage.getItem('carritoGuardado')===null)){
        let carritoDeStorage=[];
        return carritoDeStorage
    }
    else{

    const carritoRecuperado = JSON.parse(localStorage.getItem('carritoGuardado'));
    
    const arrayProductos=[];
    for(const obj of carritoRecuperado){
        arrayProductos.push(new Producto(obj.id, obj.nombre, obj.descripcion, obj.precio, obj.stock, obj.disponibilidad, obj.imagen, obj.cantidad) )
    }
    let carritoDeStorage= arrayProductos
    console.log(carritoDeStorage);
    return carritoDeStorage;
    }
}

// Cargar el carrito cargado en local storage cuando se vuelve a cargar la pagina, 

function cargarCarritoLS(){
    let carritoDeStorage = getCarrito();
    carritoDeStorage.forEach(function(item){
        let div=document.createElement('div')
        div.setAttribute('class', 'productoEnCarrito')
        div.innerHTML=`<p>${item.nombre}</p>
                   <p id="cant${item.id}">Cantidad:${item.cantidad}</p>
                   <p>Precio unitario: $${item.precio}</p>
                   <button class="boton-eliminar" id="eliminar${item.id}">
                   <i class="fas fa-trash-alt"></i>
                   </button>
                   `
    contenedorCarrito.appendChild(div)

    actualizarCarritoStorage();


    let btnEliminar=document.getElementById(`eliminar${item.id}`)
    btnEliminar.addEventListener('click', ()=>{
        if(item.cantidad === 1){
            carritoDeStorage=carritoDeStorage.filter(producto => producto.id !== item.id)
            btnEliminar.parentElement.remove() 
            actualizarCarritoStorage()
        }
        else{
            item.cantidad = item.cantidad - 1
            document.getElementById(`cant${item.id}`).innerHTML=`<p id="cant${item.id}">Cantidad: ${item.cantidad}</p>`
            actualizarCarritoStorage()
        }
    })
})
 
}


// Finalizar la compra 

let botonFinalizar = document.getElementById('finalizar')
botonFinalizar.addEventListener('click', finalizarCompra)

function finalizarCompra(e){
    e.preventDefault();
    if(carritoDeCompras.length === 0){

        Swal.fire({
            icon: "error",
            title: "No hay nada cargado en el carrito",
            timer: 1500,
            background: "linear-gradient(red, pink, white)",
        });

    }else{
        pagar();
        //window.location="opcion1.html"; 
    }
       
}

// Pagar la compra con Mercado Pago

async function pagar() {
    let carritoDeStorage = getCarrito();

    const productsToMP = carritoDeStorage.map((element) => {
      let nuevoElemento = {
        title: element.nombre,
        description: element.descripcion,
        picture_url: element.imagen,
        category_id: element.id,
        quantity: Number(element.cantidad),
        currency_id: "ARS",
        unit_price: Number(element.precio),
      };
      return nuevoElemento;
    });
    console.log(productsToMP)
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer TEST-8806153257953965-090411-2fb58d8a74de65fce5a1138fdf9c7a86-1191985114",
        },
        body: JSON.stringify({
          items: productsToMP,
        }),
      }
    );
    console.warn(response)
    const data = await response.json();
    console.log(data)
    window.open(data.init_point, "_blank");
  }