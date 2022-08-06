// Bienvenida a la pagina

/*
function bienvenida(){
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    alert('Bienvenido a nuestra pagina' + ' ' + nombre + ' ' + apellido);

    this.nombreCompleto = function(){
        return (nombre + ' ' + ' ' + apellido);
    }
}

bienvenida();

// Construccion de productos

class Producto {
    constructor (id, nombre, precio, stock, disponibilidad){
        this.id = id;
        this.nombre = nombre.toLowerCase ();
        this.precio = parseInt (precio);
        this.stock = parseInt (stock);
        this.disponibilidad = disponibilidad.toLowerCase ();
        this.itemVendido = false; 
    }
    sumarIvayEnvio (){
        this.precio = this.precio * 1.21 * 1.20;
    }
    vender (cantidad){
        if (cantidad > stock){
            alert ('No hay stock suficiente')
        }
        else {
            this.stock = this.stock - cantidad; 
            this.itemVendido = true;
        }
    }
    productoSeleccionado(){
        alert ('El producto es' + ' ' + this.nombre + ' ' + ',El precio con IVA y envio incluidos es' + this.sumarIvayEnvio ());
        if(this.itemVendido === true)
        {
            alert ('Hay venta');
        }   
        else{
            alert ('No hay venta');
        }
    }
}

// Creo los items de la pagina con los datos necesarios para la venta 

const productos = [];

productos.push (new Producto ('1', 'Flores para decoracion', 500, 10, 'Entrega inmediata'));
productos.push (new Producto ('2', 'Porta velas', 800, 5, 'Entrega inmediata'));
productos.push (new Producto ('3', 'Frascos decorados', 250, 0, 'Entrega en 24 hs'));
productos.push (new Producto ('4', 'Bandeja', 650, 2, 'Entrega inmediata'));
productos.push (new Producto ('5', 'Jabones decorados', 100, 25, 'Entrega inmediata'));
productos.push (new Producto ('6', 'Caja con dos frascos decorados', 900, 1, 'Entrega inmediata'));
productos.push (new Producto ('7', 'Cajoncito de guardado', 700, 0, 'Entrega en 36 hs'));
productos.push (new Producto ('8', 'Caja de te', 1200, 0, 'Entrega en 48 hs'));

// Sumar el IVA y el costo de envio 

for (const Producto of productos){
    Producto.sumarIvayEnvio()
}

// Seleccionar items para la compra, 



function seleccionarItem(){
    seleccion = prompt ('Ingrese producto');
    return seleccion;
}


const compra = productos.find (producto => producto.nombre === seleccionarItem()) 


console.log(compra);




// Saludo de despedida de la pagina, 

alert('Gracias por visitar nuestra pagina' + ' ' + this.nombreCompleto());

*/

