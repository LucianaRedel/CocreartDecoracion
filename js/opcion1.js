
// Version que funciona, pero borra el usuario ya cargado en la segunda registracion 

const datosParaCompra=document.getElementById('datos-compra-borrar');
const confirmar=document.getElementById('confirmar');

document.getElementById('finalizarCompra').style.visibility = 'hidden';
document.getElementById('formularioIngresar').style.visibility = 'hidden';
document.getElementById('formularioRegistrar').style.visibility = 'hidden';

// Construccion de los datos de usuarios 
class Usuario{
    constructor(id, nombre, apellido, email, contraseña, direccion, ciudad, codigoPostal){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.contraseña=contraseña;
        this.direccion=direccion;
        this.ciudad=ciudad;
        this.codigoPostal=codigoPostal;
    }  
}

listadoDeUsuarios=[]; 

// Definir funcion de guardado de usuarios 

const GuardarUsuario=()=>{

    let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
    return usuariosGuardados;

 }

 // Funcion para recuperar usuarios guardados 

 const RecuperarUsuarios=()=>{
    const usuariosRecuperados=JSON.parse(localStorage.getItem('usuariosGuardados'));

    const arrayUsuarios=[]; 
    for (const objeto of usuariosRecuperados)
    arrayUsuarios.push(new Usuario(objeto. id, objeto.nombre, objeto.apellido, objeto.email, objeto.contraseña, objeto.direccion, objeto.ciudad, objeto.codigoPostal));


    let listadoDeUsuarios= arrayUsuarios
    console.log(listadoDeUsuarios);
    return listadoDeUsuarios;
}

// Registrar / Verificar nuevo usuario

let botonRegistrar = document.getElementById('registrar')
botonRegistrar.addEventListener('click', registrarUsuario)


// Verificar si el usuario ya existe 

// No se porque dejo de andar, no pude encontrar el error, estaba andando bien!

function verificarUsuario(){
    listadoDeUsuarios=RecuperarUsuarios();

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
    } else{
        registrarUsuario();
    }
}

// Registrar usuario

function registrarUsuario(){ 
    let id= '';
    let nombre= document.getElementById('registroNombre').value;
    let apellido= document.getElementById('registroApellido').value;
    let email=document.getElementById('registroEmail').value;
    let contraseña=document.getElementById('registroClave').value;
    let direccion=document.getElementById('registroDireccion').value;
    let ciudad=document.getElementById('registroCiudad').value;
    let codigoPostal=document.getElementById('registroCodigo').value;

    
    listadoDeUsuarios= [];

    let nuevoUsuario;
    if (listadoDeUsuarios.length === 0){
        let id=0 
        nuevoUsuario=new Usuario (id, nombre, apellido, email, contraseña, direccion, ciudad, codigoPostal);
        listadoDeUsuarios.push(nuevoUsuario);

        GuardarUsuario(nuevoUsuario);

        //window.location = "compra.html"

        swal("Usuario registrado correctamente!", "Por favor ingrese sus datos debajo para realizar el pedido", "success");

        document.getElementById('registroNombre').value="";
        document.getElementById('registroApellido').value="";
        document.getElementById('registroEmail').value="";
        document.getElementById('registroClave').value="";
        document.getElementById('registroDireccion').value="";
        document.getElementById('registroCiudad').value="";
        document.getElementById('registroCodigo').value="";

    }
    else{
        let id = listadoDeUsuarios[listadoDeUsuarios.length - 1].id + 1;
        nuevoUsuario=new Usuario (id, nombre, apellido, email, contraseña, direccion, ciudad, codigoPostal);
        listadoDeUsuarios.push(nuevoUsuario);

        GuardarUsuario(nuevoUsuario);

        //window.location = "compra.html"

        swal("Usuario registrado correctamente!", "Por favor ingrese sus datos debajo para realizar el pedido", "success");

        document.getElementById('registroNombre').value="";
        document.getElementById('registroApellido').value="";
        document.getElementById('registroEmail').value="";
        document.getElementById('registroClave').value="";
        document.getElementById('registroDireccion').value="";
        document.getElementById('registroCiudad').value="";
        document.getElementById('registroCodigo').value="";

    }
  
}

// Ingreso a la pagina para comprar, usuario ya registrado 


let nombreIngresado;
let apellidoIngresado;
let contraseñaIngresado; 
let emailIngresado;

let botonIngresar = document.getElementById('ingresar')
botonIngresar.addEventListener('click', Ingresar)

function Ingresar(){

    nombreIngresado=document.getElementById('nombreIngreso').value;
    apellidoIngresado=document.getElementById('apellidoIngreso').value;
    contraseñaIngresado=document.getElementById('claveDeIngreso').value;
    emailIngresado=document.getElementById('email').value;
    

    //let listadoDeUsuarios = baseUsuarios();
    let listadoDeUsuarios = RecuperarUsuarios();

    let usuarioIngresado = listadoDeUsuarios.find(((usuario)=>usuario.nombre==nombreIngresado) && ((usuario)=>usuario.apellido==apellidoIngresado));
    if(usuarioIngresado)
    {
        if((usuarioIngresado.contraseña===contraseñaIngresado) && (usuarioIngresado.email===emailIngresado))
        {
            //document.querySelector('#seccionComprar').style.display='none';
            //mensaje.innerText='Bienvenido a CocreArt' + ' ' + nombreIngresado + ' ' + apellidoIngresado;
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
    }
    
}

// Confirmar y traer los datos del usuario en la pantalla para finalizar la compra


let botonVerificar = document.getElementById('verificar')
botonVerificar.addEventListener('click', confirmarDatos)

function confirmarDatos(){
    emailCompra=document.getElementById('emailCompra').value;

    let listadoDeUsuarios = RecuperarUsuarios();

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

            GuardaCompra();
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

// Guardar datos del usuario que realiza la compra

const GuardaCompra = ()=>{

    let emailCompra = localStorage.setItem('compraGuardada', JSON.stringify(Usuario));
    return emailCompra;

 }

// Mostrar las partes ocultas del archivo html 

let mostrarFinalizar= document.getElementById('botonFinalizar')
mostrarFinalizar.addEventListener('click', Finalizar)

function Finalizar(){

    document.getElementById('finalizarCompra').style.visibility = 'visible';

}

let mostrarIngresar=document.getElementById('botonIngresar')
mostrarIngresar.addEventListener('click', Ingreso)

function Ingreso(){

    document.getElementById('formularioIngresar').style.visibility = 'visible';

}

let mostrarRegistrar=document.getElementById('botonRegistrar')
mostrarRegistrar.addEventListener('click', Registro)

function Registro(){

    document.getElementById('formularioRegistrar').style.visibility = 'visible';

}

// Finalizar la compra y dirigirse a la pagina para el pago


let botonPagar= document.getElementById('pagar')
botonPagar.addEventListener('click', pagarCompra)

function pagarCompra (){
    window.location='https://www.mercadopago.com.ar'
}





/*



const GuardarUsuario=()=>{

    if(JSON.parse(localStorage.getItem('usuariosGuardados')) === null){
        let nuevoUsuario;
        listadoDeUsuarios.push(nuevoUsuario);

        let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
        return usuariosGuardados;
    } 
    else{
        const usuariosExistentes=JSON.parse(localStorage.getItem('usuariosGuardados'));
        usuariosExistentes.push(nuevoUsuario)

        let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(usuariosExistentes));
        return usuariosGuardados;

        }


// No funciona, me da un error de objeto null 

// Primero, ver si hay algo guardado, si no hay, guardar el nuevo usuario registrado, si ya hay alguno registrado, 
// recuperarlo del storage, guardarlo en un array, agregar el nuevo usuario y volver a guardarlo en el storage 


    // if(JSON.parse(localStorage.getItem('usuariosGuardados')) === null){
    //     let nuevoUsuario;
    //     listadoDeUsuarios.push(nuevoUsuario);

    //     let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
    //     return usuariosGuardados;
    // } 
    // else{
    //     const usuariosExistentes=JSON.parse(localStorage.getItem('usuariosGuardados'));

    //     const arrayUsuarios= []; 
    //     for (const objeto of usuariosExistentes)
    //     arrayUsuarios.push(new Usuario(objeto.id, objeto.nombre, objeto.apellido, objeto.email, objeto.contraseña, objeto.direccion, objeto.ciudad, objeto.codigoPostal));

    //     let listadoDeUsuarios = arrayUsuarios
    //     let nuevoUsuario;
    //     listadoDeUsuarios.push(nuevoUsuario);

    //     let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
    //     return usuariosGuardados;

    // }


// Otra opcion que tampoco funciona 

    // let usuariosExistentes=(JSON.parse(localStorage.getItem('usuariosGuardados')));
    // let arrayUsuarios=[]; 

    // if(usuariosExistentes === null ){

    // }
    // else{
    //     for (const objeto of usuariosExistentes)
    //     arrayUsuarios.push(new Usuario(objeto.id, objeto.nombre, objeto.apellido, objeto.email, objeto.contraseña, objeto.direccion, objeto.ciudad, objeto.codigoPostal));
    //     let listadoDeUsuarios = arrayUsuarios
    //     let nuevoUsuario;
    //     listadoDeUsuarios.push(nuevoUsuario);

    //     let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
    //     return usuariosGuardados;

    // }



 }
*/