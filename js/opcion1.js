
// Constructor de usuarios

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

// Definir funcion de guardado de usuario 

const GuardarUsuario=()=>{

// No funciona, me da un error de objeto null 

// Primero, ver si hay algo guardado, si no hay, guardar el nuevo usuario registrado, si ya hay alguno registrado, 
// recuperarlo del storage, guardarlo en un array, agregar el nuevo usuario y volver a guardarlo en el storage 

/*
    if(JSON.parse(localStorage.getItem('usuariosGuardados')) === null){
        let nuevoUsuario;
        listadoDeUsuarios.push(nuevoUsuario);

        let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
        return usuariosGuardados;
    } 
    else{
        const usuariosExistentes=JSON.parse(localStorage.getItem('usuariosGuardados'));

        const arrayUsuarios= []; 
        for (const objeto of usuariosExistentes)
        arrayUsuarios.push(new Usuario(objeto.id, objeto.nombre, objeto.apellido, objeto.email, objeto.contraseña, objeto.direccion, objeto.ciudad, objeto.codigoPostal));

        let nuevoUsuario;
        listadoDeUsuarios.push(nuevoUsuario);

        let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
        return usuariosGuardados;

    }

*/

    let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
    return usuariosGuardados;

 }

 // Funcion para recuperar usuarios guardados 

 const RecuperarUsuarios=()=>{
    const usuariosRecuperados=JSON.parse(localStorage.getItem('usuariosGuardados'));

    const arrayUsuarios=[]; 
    for (const objeto of usuariosRecuperados)
    arrayUsuarios.push(new Usuario(objeto.id, objeto.nombre, objeto.apellido, objeto.email, objeto.contraseña, objeto.direccion, objeto.ciudad, objeto.codigoPostal));


    let listadoDeUsuarios= arrayUsuarios
    console.log(listadoDeUsuarios);
    return listadoDeUsuarios;
}

// Registrar nuevo usuario

let botonRegistrar = document.getElementById('registrar')
botonRegistrar.addEventListener('click', registrarUsuario)

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

        mensajeRegistroCorrecto.innerText=`Usuario Registrado Correctamente
                            Por favor ingrese sus datos debajo para realizar el pedido`;
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

        mensajeRegistroCorrecto.innerText=`Usuario Registrado Correctamente
                            Por favor ingrese sus datos debajo para realizar el pedido`;
        document.getElementById('registroNombre').value="";
        document.getElementById('registroApellido').value="";
        document.getElementById('registroEmail').value="";
        document.getElementById('registroClave').value="";
        document.getElementById('registroDireccion').value="";
        document.getElementById('registroCiudad').value="";
        document.getElementById('registroCodigo').value="";
    }
  
}

// Ingreso a la pagina


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
            mensajeIngresoError.innerText=`Por favor reingrese los datos correctos para ingresar a la pagina`;

            document.getElementById('nombreIngreso').value="";
            document.getElementById('apellidoIngreso').value="";
            document.getElementById('claveDeIngreso').value="";
            document.getElementById('email').value="";
        }
    }
    else{
        mensajeIngreso.innerText=`No existe el usuario, por favor registrese`;

            document.getElementById('nombreIngreso').value="";
            document.getElementById('apellidoIngreso').value="";
            document.getElementById('claveDeIngreso').value="";
            document.getElementById('email').value="";
    }
    
}


// Version que funciona, pero borra el usuario ya cargado en la segunda registracion 
/*

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

// Definir funcion de guardado de usuario 

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

// Registrar nuevo usuario

let botonRegistrar = document.getElementById('registrar')
botonRegistrar.addEventListener('click', registrarUsuario)

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

    let nuevoUsuario = {};
    if (listadoDeUsuarios.length === 0){
        let id=0 
        nuevoUsuario=new Usuario (id, nombre, apellido, email, contraseña, direccion, ciudad, codigoPostal);
        listadoDeUsuarios.push(nuevoUsuario);

        GuardarUsuario(nuevoUsuario);

        //window.location = "compra.html"

        mensajeRegistroCorrecto.innerText=`Usuario Registrado Correctamente
                            Por favor ingrese sus datos debajo para realizar el pedido`;
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

        mensajeRegistroCorrecto.innerText=`Usuario Registrado Correctamente
                            Por favor ingrese sus datos debajo para realizar el pedido`;
        document.getElementById('registroNombre').value="";
        document.getElementById('registroApellido').value="";
        document.getElementById('registroEmail').value="";
        document.getElementById('registroClave').value="";
        document.getElementById('registroDireccion').value="";
        document.getElementById('registroCiudad').value="";
        document.getElementById('registroCodigo').value="";
    }
  
}

// Ingreso a la pagina



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
            mensajeIngresoError.innerText=`Por favor reingrese los datos correctos para ingresar a la pagina`;

            document.getElementById('nombreIngreso').value="";
            document.getElementById('apellidoIngreso').value="";
            document.getElementById('claveDeIngreso').value="";
            document.getElementById('email').value="";
        }
    }
    else{
        mensajeIngreso.innerText=`No existe el usuario, por favor registrese`;

            document.getElementById('nombreIngreso').value="";
            document.getElementById('apellidoIngreso').value="";
            document.getElementById('claveDeIngreso').value="";
            document.getElementById('email').value="";
    }
    
}

*/