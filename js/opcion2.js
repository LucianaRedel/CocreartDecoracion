// Version que funciona con registracion de usuarios y guardado en storage

// Ocultar las partes de la pagina para que no se superpongan

document.getElementById('finalizarCompra').style.visibility = 'hidden';
document.getElementById('formularioIngresar').style.visibility = 'hidden';
document.getElementById('formularioRegistrar').style.visibility = 'hidden';

// Construccion de los datos de usuarios 

let listadoDeUsuarios=[];

class Usuario{
    constructor(id, nombre, apellido, email, contrasenia, direccion, ciudad, codigoPostal){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.contrasenia=contrasenia;
        this.direccion=direccion;
        this.ciudad=ciudad;
        this.codigoPostal=codigoPostal;
    }  
}

// Guardar usuarios en local storage 

function guardarUsuarios(clave, valor) {   
    localStorage.setItem(clave, JSON.stringify(valor));
}

// Recuperar usuarios de local storage 

function recuperarUsuarios(clave) {
    return localStorage.getItem(clave) ? JSON.parse(localStorage.getItem(clave)) : [];
}

// Registrar un nuevo usuario, se llama la funcion luego de verificar que el usuario no exista previamente

function registrarUsuario() {
    let nombre= document.getElementById('registroNombre').value;
    let apellido= document.getElementById('registroApellido').value;
    let email=document.getElementById('registroEmail').value;
    let contrasenia=document.getElementById('registroClave').value;
    let direccion=document.getElementById('registroDireccion').value;
    let ciudad=document.getElementById('registroCiudad').value;
    let codigoPostal=document.getElementById('registroCodigo').value;

    let nuevoUsuario;
    if (listadoDeUsuarios.length === 0){
    let id=0 
    nuevoUsuario=new Usuario(id, nombre, apellido, email, contrasenia, direccion, ciudad, codigoPostal);
    listadoDeUsuarios.push(nuevoUsuario);

    guardarUsuarios('usuariosGuardados', listadoDeUsuarios);

    console.log(listadoDeUsuarios);
    swal("Usuario registrado correctamente!", "Por favor ingrese sus datos debajo para realizar el pedido", "success");

        document.getElementById('registroNombre').value="";
        document.getElementById('registroApellido').value="";
        document.getElementById('registroEmail').value="";
        document.getElementById('registroClave').value="";
        document.getElementById('registroDireccion').value="";
        document.getElementById('registroCiudad').value="";
        document.getElementById('registroCodigo').value="";

        document.getElementById('formularioRegistrar').style.visibility = 'hidden';

        document.getElementById('formularioIngresar').style.visibility = 'visible';
    }
    else{
        let id = listadoDeUsuarios[listadoDeUsuarios.length - 1].id + 1;
        nuevoUsuario=new Usuario (id, nombre, apellido, email, contrasenia, direccion, ciudad, codigoPostal);
        listadoDeUsuarios.push(nuevoUsuario);

        guardarUsuarios('usuariosGuardados', listadoDeUsuarios);    

        //window.location = "compra.html"

        swal("Usuario registrado correctamente!", "Por favor ingrese sus datos debajo para realizar el pedido", "success");

        document.getElementById('registroNombre').value="";
        document.getElementById('registroApellido').value="";
        document.getElementById('registroEmail').value="";
        document.getElementById('registroClave').value="";
        document.getElementById('registroDireccion').value="";
        document.getElementById('registroCiudad').value="";
        document.getElementById('registroCodigo').value="";

        document.getElementById('formularioRegistrar').style.visibility = 'hidden';

        document.getElementById('formularioIngresar').style.visibility = 'visible';
    }
}

// Verificar usuario y registrar si no existe 

let mostrarRegistrar=document.getElementById('botonRegistrar')
mostrarRegistrar.addEventListener('click', Registro)

function Registro(){
    document.getElementById('formularioRegistrar').style.visibility = 'visible';
    document.getElementById('formularioIngresar').style.visibility = 'hidden';
    document.getElementById('finalizarCompra').style.visibility = 'hidden';
}

let botonRegistrar = document.getElementById('registrar')
botonRegistrar.addEventListener('click', verificarUsuario)

function verificarUsuario(){
    listadoDeUsuarios = recuperarUsuarios('usuariosGuardados');

    let email=document.getElementById('registroEmail').value; 

    if (email=listadoDeUsuarios.find((usuario) => usuario.email === email)){
        swal("Ya existe un usuario con ese email", "No debe volver a registrarse", "error");

        document.getElementById('registroNombre').value="";
        document.getElementById('registroApellido').value="";
        document.getElementById('registroEmail').value="";
        document.getElementById('registroClave').value="";
        document.getElementById('registroDireccion').value="";
        document.getElementById('registroCiudad').value="";
        document.getElementById('registroCodigo').value="";

        document.getElementById('formularioRegistrar').style.visibility = 'hidden';

        document.getElementById('formularioIngresar').style.visibility = 'visible';

    } else{
        registrarUsuario();
    }
}

// Ingresar a la pagina una vez que el usuario esta registrado 

let mostrarIngresar=document.getElementById('botonIngresar')
mostrarIngresar.addEventListener('click', Ingreso)

function Ingreso(){
    document.getElementById('formularioIngresar').style.visibility = 'visible';
    document.getElementById('formularioRegistrar').style.visibility = 'hidden';
    document.getElementById('finalizarCompra').style.visibility = 'hidden';
}
let nombreIngresado;
let apellidoIngresado;
let contraseniaIngresado; 
let emailIngresado;

let botonIngresar = document.getElementById('ingresar')
botonIngresar.addEventListener('click', Ingresar)

function Ingresar(){
    
    nombreIngresado=document.getElementById('nombreIngreso').value;
    apellidoIngresado=document.getElementById('apellidoIngreso').value;
    contraseniaIngresado=document.getElementById('claveDeIngreso').value;
    emailIngresado=document.getElementById('email').value;
    
    listadoDeUsuarios = recuperarUsuarios('usuariosGuardados');

    let usuarioIngresado = listadoDeUsuarios.find(((usuario)=>usuario.nombre==nombreIngresado) && ((usuario)=>usuario.apellido==apellidoIngresado));
    if(usuarioIngresado)
    {
        if((usuarioIngresado.contrasenia===contraseniaIngresado) && (usuarioIngresado.email===emailIngresado))
        {
            window.location = "comprar1.html"
        }
        else{
            swal("Error!", "Por favor reingrese los datos correctos para ingresar a la pagina", "error");

            document.getElementById('nombreIngreso').value="";
            document.getElementById('apellidoIngreso').value="";
            document.getElementById('claveDeIngreso').value="";
            document.getElementById('email').value="";
        }
    }
    else{
        swal("Error!", "No existe el usuario, por favor registrese para ingresar", "error");

            document.getElementById('nombreIngreso').value="";
            document.getElementById('apellidoIngreso').value="";
            document.getElementById('claveDeIngreso').value="";
            document.getElementById('email').value="";

            document.getElementById('formularioIngresar').style.visibility = 'hidden';

            document.getElementById('formularioRegistrar').style.visibility = 'visible';
    }
   
}


// Finalizar la compra, confirmar los datos de envio y del usuario

let mostrarFinalizar= document.getElementById('botonFinalizar')
mostrarFinalizar.addEventListener('click', Finalizar)

function Finalizar(){
    document.getElementById('finalizarCompra').style.visibility = 'visible';
    document.getElementById('formularioIngresar').style.visibility = 'hidden';
    document.getElementById('formularioRegistrar').style.visibility = 'hidden';
}

let botonVerificar = document.getElementById('verificar')
botonVerificar.addEventListener('click', confirmarDatos)

function confirmarDatos(){
    emailCompra=document.getElementById('emailCompra').value;

    listadoDeUsuarios = recuperarUsuarios('usuariosGuardados');

    let datosUsuario = listadoDeUsuarios.find((usuario)=>usuario.email===emailCompra);
    if(datosUsuario)
    {
        if(datosUsuario.email===emailCompra)
        {
            let div = document.createElement('div')
            div.className='datosUsuario'
            div.innerHTML=`<p> Nombre: ${datosUsuario.nombre} </p>
                           <p> Apellido: ${datosUsuario.apellido} </p>
                           <p> Dirección: ${datosUsuario.direccion} </p>
                           <p> Ciudad: ${datosUsuario.ciudad} </p>
                           <p> Codigo Postal: ${datosUsuario.codigoPostal} </p>
            `
            confirmar.appendChild (div)
            GuardaUsuarioCompra();
        }
        else{
            swal("Error!", "Verifique los datos ingresados", "error");
            emailCompra=document.getElementById('emailCompra').value="";
        }
    }
    else{
        swal("Error!", "Verifique los datos ingresados", "error");
        emailCompra=document.getElementById('emailCompra').value="";
    }
}

const GuardaUsuarioCompra = ()=>{
    localStorage.setItem('compraGuardada', JSON.stringify(emailCompra));
    return emailCompra;
 }

// Finalizar la compra y dirigirse a la pagina para el pago


let botonPagar= document.getElementById('pagar')
botonPagar.addEventListener('click', pagarCompra)

function pagarCompra (){
    window.location='https://www.mercadopago.com.ar'
}