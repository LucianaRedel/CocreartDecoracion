// Construccion de productos

class Producto {
    constructor(id, nombre, descripcion, precio, stock, disponibilidad, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion=descripcion;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.disponibilidad = disponibilidad;
        this.imagen= imagen;
    }
    sumarIvayEnvio() {
        this.precio = Math.round(this.precio * 1.21 * 1.20);
    }
}

// Creo los items de la pagina con los datos necesarios para la venta 

const productos = [];

productos.push(new Producto(1, 'Flores', 'Flores para decoración, ideales para difusores ambientales', 300, 10, 'Entrega inmediata', './img/flores blancas.jpeg'));
productos.push(new Producto(2, 'Flores', 'Flores para decoración arpillera, ideales para frascos', 400, 10, 'Entrega inmediata', './img/flores arpillera.jpeg'));
productos.push(new Producto(3, 'Flores', 'Flores para decoración tela, especialmente pensadas para floreros', 590, 10, 'Entrega inmediata', './img/flores arpillera roja blanca negra.jpeg'));
productos.push(new Producto(4, 'Flores', 'Flores para decoración tela, color negro', 590, 10, 'Entrega inmediata', './img/flores decoracion negras.jpeg'));
productos.push(new Producto(5, 'Flores', 'Flores para decoración tela, especialmente pensadas para floreros', 590, 10, 'Entrega inmediata', './img/flores tusor color rosa.jpeg'));
productos.push(new Producto(6, 'Flores', 'Flores con hermosos floreros', 590, 10, 'Entrega inmediata', './img/flores decoracion con floreros chicos.jpeg'));
productos.push(new Producto(7, 'Porta velas', 'Hermosos y variados motivos, incluyen la vela', 800, 5, 'Entrega inmediata', './img/porta velas varios motivos.jpeg'));
productos.push(new Producto(8, 'Porta velas', 'Hermosos y variados motivos, colores claros', 800, 5, 'Entrega inmediata', './img/porta velas varios motivos claros.jpeg'));
productos.push(new Producto(9, 'Porta velas', 'Modelo con dos velas, hermosa opción', 800, 5, 'Entrega inmediata', './img/porta velas de 2 velas.jpeg'));
productos.push(new Producto(10, 'Porta velas', 'En colores dorados, incluyen la vela', 800, 5, 'Entrega inmediata', './img/portavelas individual dorado.jpeg'));
productos.push(new Producto(11, 'Porta velas', 'Motivo Navidad, hermosa opción para regalar', 800, 5, 'Entrega inmediata', './img/porta velas motivo navidad.jpeg'));
productos.push(new Producto(12, 'Frascos decorados', 'Tamaño chico, distintos motivos, pensados para organizar nuestra cocina', 250, 8, 'Entrega en 24 hs', './img/frascos chicos para especies.jpeg'));
productos.push(new Producto(13, 'Frascos decorados', 'Tamaño mediano, hermosos colores, para guardar lo que quieras en ellos', 350, 8, 'Entrega en 24 hs', './img/frascos decorados varios motivos.jpeg'));
productos.push(new Producto(14, 'Frascos decorados', 'Hermosos frascos para organizar nuestros espacios', 550, 8, 'Entrega en 24 hs', './img/frasco decorado colores pasteles.jpeg'));
productos.push(new Producto(15, 'Frascos decorados', 'Los modelos mas grandes, delicados frascos para organizar nuestros espacios', 550, 8, 'Entrega en 24 hs', './img/frascos decorados grandes color negro.jpeg'));
productos.push(new Producto(16, 'Frascos decorados', 'Los modelos mas grandes, opción ideal para la cocina!', 550, 8, 'Entrega en 24 hs', './img/frascos decorados 3 color azul kitchen.jpeg'));
productos.push(new Producto(17, 'Frascos decorados', 'Delicados frascos para decorar nuestros espacios', 550, 8, 'Entrega en 24 hs', './img/frascos con flores color plateado.jpeg'));
productos.push(new Producto(18, 'Bandeja', 'Para adorno, para regalar, para lo que quieras', 650, 2, 'Entrega inmediata', './img/bandeja cuadrada individual.jpeg'));
productos.push(new Producto(19, 'Bandeja', 'Bandeja individual, llevate dos y compartí el desayuno con quien mas queres', 600, 2, 'Entrega inmediata', './img/bandeja cuadrada.jpeg'));
productos.push(new Producto(20, 'Bandeja', 'Hermosas bandejas rectangulares, ideales para servir el té y compartir con amigos', 750, 2, 'Entrega inmediata', './img/bandeja celeste rectangular.jpeg'));
productos.push(new Producto(21, 'Bandeja', 'Para adorno o para regalar, hermosa bandeja con frascos de guardado', 650, 2, 'Entrega inmediata', './img/bandeja con 3 frascos.jpeg'));
productos.push(new Producto(22, 'Bandeja', 'Modelo de bandeja rectangular', 650, 2, 'Entrega inmediata', './img/bandeja rectangular.jpeg'));
productos.push(new Producto(23, 'Jabones decorados', 'Delicados motivos, ideales para hacer un regalo especial', 100, 25, 'Entrega inmediata', './img/jabones corazones.jpeg'));
productos.push(new Producto(24, 'Jabones decorados', 'Para que se diviertan nuestros niños en el momento del baño', 100, 18, 'Entrega inmediata', './img/jabones mickey.jpeg'));
productos.push(new Producto(25, 'Jabones decorados', 'Para que nuestros chiquitos se diviertan en el momento del baño', 100, 18, 'Entrega inmediata', './img/jabones kitty.jpeg'));
productos.push(new Producto(26, 'Jabones decorados', 'Motivos de Navidad, para hacer un hermoso regalito', 100, 18, 'Entrega inmediata', './img/jabones decorados navidad.jpeg'));
productos.push(new Producto(27, 'Jabones decorados', 'Para que se diviertan en el momento del baño, hermosos dibujos', 100, 18, 'Entrega inmediata', './img/jabones decorados motivos conejitos.jpeg'));
productos.push(new Producto(28, 'Caja con frasco decorado', 'Especiales para dar un toque especial a un ambiente', 700, 18, 'Entrega inmediata', './img/caja con 3 frascos.jpeg'));
productos.push(new Producto(29, 'Caja con frasco decorado', 'Especiales para organizar la cocina', 700, 18, 'Entrega inmediata', './img/caja con 2 frascos color claro.jpeg'));
productos.push(new Producto(30, 'Caja con frasco decorado', 'Con dos frascos, para ordenar y organizar de la manera más linda', 1000, 18, 'Entrega inmediata', './img/caja blanca con dos frascos.jpeg'));
productos.push(new Producto(31, 'Caja con frasco decorado', 'Tamaño mas grande, para ordenar y organizar de la manera más linda', 1000, 18, 'Entrega inmediata', './img/caja negra con 2 frascos grandes.jpeg'));
productos.push(new Producto(32, 'Cajoncito de guardado', 'Para mas de mil usos', 700, 15, 'Entrega en 36 hs', './img/cajoncito guardado gris.jpeg'));
productos.push(new Producto(33, 'Cajoncito de guardado', 'Modelo infantil, ideales para ayudar a nuestros pequeños a organizarse mejor', 700, 15, 'Entrega en 36 hs', './img/cajoncito guardado infantil.jpeg'));
productos.push(new Producto(34, 'Cajoncito de guardado', 'Modelo infantil Oso, ideales para ayudar a nuestros pequeños a organizarse mejor', 700, 15, 'Entrega en 36 hs', './img/cajoncito guardado motivo oso.jpeg'));
productos.push(new Producto(35, 'Cajoncito de guardado', 'Modelos infantil Conejitos, ideales para ayudar a nuestros pequeños a organizarse mejor', 700, 15, 'Entrega en 36 hs', './img/cajoncito infantil modelo conejitos.jpeg'));
productos.push(new Producto(36, 'Cajoncito de guardado', 'Ideales para organizar libros', 700, 15, 'Entrega en 36 hs', './img/cajoncito de guardado para libros.jpeg'));
productos.push(new Producto(37, 'Caja de té', 'Muy lindas y siempre útiles, tamaño chico', 1100, 1, 'Entrega en 48 hs', './img/caja de te chica.jpeg'));
productos.push(new Producto(38, 'Caja de té', 'Hermosos motivos, tamaño grande, que hasta podes usarla para guardar las capsulas de café', 1300, 1, 'Entrega en 48 hs', './img/caja de te blanca grande.jpeg'));
productos.push(new Producto(39, 'Caja de té', 'Caja de té modelo campestre', 1300, 1, 'Entrega en 48 hs', './img/caja de te modelo campestre.jpeg'));
productos.push(new Producto(40, 'Caja de té', 'Hermosos motivos, para regalar o regalarte', 1300, 1, 'Entrega en 48 hs', './img/caja de te motivo patiserie.jpeg'));
productos.push(new Producto(41, 'Caja de té', 'Caja de té, modelo con 4 divisiones', 1300, 1, 'Entrega en 48 hs', './img/caja de te 4 divisiones.jpeg'));
// Sumar el IVA y el costo de envio 

for (const Producto of productos) {
    Producto.sumarIvayEnvio()
}






