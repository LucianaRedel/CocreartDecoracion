
// Incorporacion y modificaciones clase DOM


// Construccion de productos

class Producto {
    constructor(id, nombre, precio, stock, disponibilidad) {
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.disponibilidad = disponibilidad.toLowerCase();
    }
    sumarIvayEnvio() {
        this.precio = Math.round(this.precio * 1.21 * 1.20);
    }
}

// Creo los items de la pagina con los datos necesarios para la venta 

const productos = [];

productos.push(new Producto(1, 'Flores para decoración', 500, 10, 'Entrega inmediata'));
productos.push(new Producto(2, 'Porta velas', 800, 5, 'Entrega inmediata'));
productos.push(new Producto(3, 'Frascos decorados', 250, 8, 'Entrega en 24 hs'));
productos.push(new Producto(4, 'Bandeja', 650, 2, 'Entrega inmediata'));
productos.push(new Producto(5, 'Jabones decorados', 100, 25, 'Entrega inmediata'));
productos.push(new Producto(6, 'Caja con dos frascos decorados', 900, 18, 'Entrega inmediata'));
productos.push(new Producto(7, 'Cajoncito de guardado', 700, 15, 'Entrega en 36 hs'));
productos.push(new Producto(8, 'Caja de té', 1200, 1, 'Entrega en 48 hs'));

// Sumar el IVA y el costo de envio 

for (const Producto of productos) {
    Producto.sumarIvayEnvio()
}

// Actualizar datos del producto en HTML, nombre, stock y precio

// Como hacer para buscar el item y que actualice el stock? 
// Como hacer una sola funcion para todos los eventos? 

let botonSeleccionar1 = document.getElementById('flush-collapseOne')
botonSeleccionar1.addEventListener('mousemove', Seleccionar1)

function Seleccionar1(){ 
    let productosStock; 
    productos.forEach(item =>{
         productosStock = item.nombre
    })
    let nombreProd = document.getElementById('opcion1').value;
    if(productosStock.includes(nombreProd)){
        console.log('item encontrado');
    }
    else {
        console.log('item no encontrado');
    }
    //let opcion=document.getElementById('opcion1').value
   // productos.find((item) => { if(item.nombre === opcion) {
     // return item.id;
   
    //} 
   // else{
      // alert('error')
    //}
//})
        
}

//precio1.innerHTML= `Precio $ x`
//stock1.innerHTML= `Stock x`
//entrega1.innerHTML=`Condición x`

/*
let botonSeleccionar2 = document.getElementById('flush-collapseTwo')
botonSeleccionar2.addEventListener('mousemove', Seleccionar2)

function Seleccionar2(){ 
   
    precio2.innerHTML= `Precio x`
    stock2.innerHTML= `Stock x`
    entrega2.innerHTML=`Condición x`

}

let botonSeleccionar3 = document.getElementById('flush-collapseThree')
botonSeleccionar3.addEventListener('mousemove', Seleccionar3)

function Seleccionar3(){ 
   
    precio3.innerHTML= `Precio x`
    stock3.innerHTML= `Stock x`
    entrega3.innerHTML=`Condición x`

}

let botonSeleccionar4 = document.getElementById('flush-collapseFour')
botonSeleccionar4.addEventListener('mousemove', Seleccionar4)

function Seleccionar4(){ 
   
    precio4.innerHTML= `Precio x`
    stock4.innerHTML= `Stock x`
    entrega4.innerHTML=`Condición x`

}

let botonSeleccionar5 = document.getElementById('flush-collapseFive')
botonSeleccionar5.addEventListener('mousemove', Seleccionar5)

function Seleccionar5(){ 
   
    precio5.innerHTML= `Precio x`
    stock5.innerHTML= `Stock x`
    entrega5.innerHTML=`Condición x`

}

let botonSeleccionar6 = document.getElementById('flush-collapseSix')
botonSeleccionar6.addEventListener('mousemove', Seleccionar6)

function Seleccionar6(){ 
   
    precio6.innerHTML= `Precio x`
    stock6.innerHTML= `Stock x`
    entrega6.innerHTML=`Condición x`

}

let botonSeleccionar7 = document.getElementById('flush-collapseSeven')
botonSeleccionar7.addEventListener('mousemove', Seleccionar7)

function Seleccionar7(){ 
   
    precio7.innerHTML= `Precio x`
    stock7.innerHTML= `Stock x`
    entrega7.innerHTML=`Condición x`

}

let botonSeleccionar8 = document.getElementById('flush-collapseEight')
botonSeleccionar8.addEventListener('mousemove', Seleccionar8)

function Seleccionar8(){ 
   
    precio8.innerHTML= `Precio x`
    stock8.innerHTML= `Stock x`
    entrega8.innerHTML=`Condición x`

}

*/

// Capturar el valor de la seleccion de items, con el checkbox "seleccionar"
// Caputar el importe de la cantidad del item
// En el caso de que sea true, sumar el item y la   cantidad a la compra



let opcion1= document.getElementById('opcion1');
let msg1 = document.getElementById('msg1');

  opcion1.addEventListener('click', function() {
    if(opcion1.checked) {
      
      msg1.innerText = 'Item agregado a la compra';
    } else {
      msg1.innerText = 'Item NO agregado a la compra';
    }
  });

let opcion2 = document.getElementById('opcion2');
let msg2 = document.getElementById('msg2');

  opcion2.addEventListener('click', function() {
    if(opcion2.checked) {

      msg2.innerText = 'Item agregado a la compra';
    } else {
      msg2.innerText = 'Item NO agregado a la compra';
    }
  });



// Seleccionar items para la compra, 
// No funciona aun en la pagina, sino como ventana emergente

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









