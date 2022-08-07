// Bienvenida a la pagina

/*

function bienvenida() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    alert('Bienvenido a nuestra pagina' + ' ' + nombre + ' ' + apellido);

    this.nombreCompleto = function () {
        return (nombre + ' ' + ' ' + apellido);
    }
}

bienvenida();

// Construccion de productos

class Producto {
    constructor(id, nombre, precio, stock, disponibilidad) {
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.disponibilidad = disponibilidad.toLowerCase();
        this.itemVendido = false;
    }
    sumarIvayEnvio() {
        this.precio = this.precio * 1.21 * 1.20;
    }
    vender(cantidad) {
        if (cantidad > stock) {
            alert('No hay stock suficiente')
        } else {
            this.stock = this.stock - cantidad;
            this.itemVendido = true;
        }
    }
    productoSeleccionado() {
        alert('El producto es' + ' ' + this.nombre + ' ' + ',El precio con IVA y envio incluidos es' + this.sumarIvayEnvio());
        if (this.itemVendido === true) {
            alert('Hay venta');
        } else {
            alert('No hay venta');
        }
    }
}

// Creo los items de la pagina con los datos necesarios para la venta 

const productos = [];

productos.push(new Producto(1, 'Flores para decoracion', 500, 10, 'Entrega inmediata', false));
productos.push(new Producto(2, 'Porta velas', 800, 5, 'Entrega inmediata', false));
productos.push(new Producto(3, 'Frascos decorados', 250, 8, 'Entrega en 24 hs', false));
productos.push(new Producto(4, 'Bandeja', 650, 2, 'Entrega inmediata', false));
productos.push(new Producto(5, 'Jabones decorados', 100, 25, 'Entrega inmediata', false));
productos.push(new Producto(6, 'Caja con dos frascos decorados', 900, 18, 'Entrega inmediata', false));
productos.push(new Producto(7, 'Cajoncito de guardado', 700, 15, 'Entrega en 36 hs', false));
productos.push(new Producto(8, 'Caja de te', 1200, 1, 'Entrega en 48 hs', false));

// Sumar el IVA y el costo de envio 

for (const Producto of productos) {
    Producto.sumarIvayEnvio()
}

// Seleccionar items para la compra, 

// ` comillas invertidas para concatenar string, sin usar el + 

let compra = [];


const listadoDeProductos = () => {
    let mensaje = 'Selecciones items'
    productos.forEach(item => {
        mensaje += `
            Opcion ${item.id}, ${item.nombre}, Stock ${item.stock}, Precio final $ ${item.precio}, Disponibilidad ${item.disponibilidad}
        `
    })
        mensaje += `
            Opcion 0: Sin seleccion de items
        `
        let opcion = Number(prompt(mensaje))
        return opcion;
    
}


let comprar = true;

while (comprar) {
    let opcion = listadoDeProductos()
    if(opcion >= 1 && opcion <= 8){
        let productoElegido = productos.find(item => item.id === opcion)
        if (compra.length === 0){
            productoElegido.cantidad = 1;
            productoElegido.stock--;
            compra.push(productoElegido);
        }
        else{
            let productoComprado = compra.find(item => item.id === opcion)
            if (productoComprado){
                productoComprado.cantidad++;
                productoComprado.stock--;
            }
            else{
                productoElegido.cantidad = 1;
                productoElegido.stock--;
                compra.push(productoElegido);
            }
        }
    }
    else{
        comprar = false;
    }

}

const mostrarTotalCompra = () =>{
    let mensajeCompra = "";
    if(compra.length > 0) {
        compra.forEach(item => {
            mensajeCompra += `
            Producto ${item.nombre}, Cantidad ${item.cantidad}, Subtotal producto $ ${item.precio * item.cantidad}
            `
        })
            mensajeCompra += `
            Total compra $ ${compra.reduce ((total, item) => total + (item.precio * item.cantidad),0)}
            `
            alert(mensajeCompra)
    }
    else{
        mensajeCompra += 'No hay items seleccionados'
        alert (mensajeCompra)
    }
}

mostrarTotalCompra();

// Saludo de despedida de la pagina, 

alert('Gracias por visitar nuestra pagina' + ' ' + this.nombreCompleto());


// Hasta aca funciona todo

// no funciona 
/*
function seleccionarItem(){
    seleccion = prompt ('Ingrese producto');
    return seleccion;
}


const compra = productos.find (producto => producto.nombre === seleccionarItem()) 


console.log(compra);


// Otro intento de seleccion de item

function seleccionarItem (productos, item){
    return productos.find (producto => producto.nombre === item.toLowerCase() );
}

for (let index = 0; index < 8; index ++){
    let compra = seleccionarItem (productos, prompt('Ingrese producto') );
    if (compra != undefined){
        console.log ('Producto'+ ' ' + compra.nombre + ' ' + 'Importe total' + ' ' + compra.precio)
    }
    else{
        console.log('Error en ingreso');
    }
}
*/
// Prueba y correccion para que el stock no sea negativo

// Bienvenida a la pagina


function bienvenida() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    alert('Bienvenido a nuestra página' + ' ' + nombre + ' ' + apellido);

    this.nombreCompleto = function () {
        return (nombre + ' ' + ' ' + apellido);
    }
}

bienvenida();



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



// Seleccionar items para la compra, 

// ` comillas invertidas para concatenar string, sin usar el + 

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

// Saludo de despedida de la pagina, 

alert('Gracias por visitar nuestra página' + ' ' + this.nombreCompleto());
