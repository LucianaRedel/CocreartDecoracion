// Incorporacion y modificaciones clase DOM

// Ingreso y registracion de usuarios nuevos

class Usuario{
    constructor(nombre, apellido, email, contraseña){
        this.nombre=nombre.toLowerCase();
        this.apellido=apellido.toLowerCase();
        this.email=email.toLowerCase();
        this.contraseña=contraseña.toLowerCase();
    }  
}

function baseUsuarios(){

const usuarios=[];

usuarios.push(new Usuario('Andres','Santos', 'asantos@gmail.com','autos'));
usuarios.push(new Usuario('Carolina','Bustamante', 'carolinabustamante@gmail.com','venezuela'));
usuarios.push(new Usuario('Mariana','Quiroga', 'marianaquiroga@gmail.com','tortas'));
usuarios.push(new Usuario('Laura','Escobar', 'lauraescobar@gmail.com','calle corrientes'));

return usuarios;

}

baseUsuarios();

// Registro de nuevo usuario no funciona

let listadoDeUsuarios = [];

let botonRegistrar = document.getElementById('registrar')
botonRegistrar.addEventListener('click', Registrar)

function Registrar(){
    let nuevoUsuario = new Usuario(nombreIngreso.value, apellidoIngreso.value, claveDeIngreso.value);
    listadoDeUsuarios.push(nuevoUsuario)
}


// Registro de nuevo usuario no funciona

// Otra opcion para registro de usuarios 

function registrarUsuario(){
    let nombre= document.getElementById('nombreIngreso').value;
    let apellido= document.getElementById('apellidoIngreso').value;
    let email=document.getElementById('email').value;
    let contraseña=document.getElementById('claveDeIngreso').value;

    const usuarios = {};
    if (listadoDeUsuarios.length === 0){
        usuarios = new Usuario (0, nombre, apellido, email, contraseña);
    }
    else{
        const id = listadoDeUsuarios[listadoDeUsuarios.length - 1].id + 1;
        usuarios = new Usuario (id, nombre, apellido, email, contraseña);
    }
}

// Registro de nuevo usuario no funciona

// Definiciones para el ingreso a la pagina

let nombreIngresado;
let apellidoIngresado;
let emailIngresado;
let contraseñaIngresado; 

let botonIngresar = document.getElementById('ingresar')
botonIngresar.addEventListener('click', Ingresar)

function Ingresar(){
    nombreIngresado=document.getElementById('nombreIngreso').value;
    apellidoIngresado=document.getElementById('apellidoIngreso').value;
    emailIngresado=document.getElementById('email').value;
    contraseñaIngresado=document.getElementById('claveDeIngreso').value;

    let listadoDeUsuarios=baseUsuarios();

    let usuarioIngresado=listadoDeUsuarios.find(((usuario)=>usuario.nombre==nombreIngresado) && ((usuario)=>usuario.apellido==apellidoIngresado) && ((usuario)=>usuario.email=emailIngresado));
    if(usuarioIngresado)
    {
        if(usuarioIngresado.contraseña==contraseñaIngresado)
        {
            document.querySelector('#seccionComprar').style.display='none';
            mensaje.innerHTML='Bienvenido a CocreArt' + ' ' + nombreIngresado + ' ' + apellidoIngresado;
            window.location = "comprar1.html"
        }
        else{
            mensajeIngresoError.innerHTML=`Por favor reingrese los datos correctos para ingresar a la pagina`;
        }
    }
    else{
        mensajeIngreso.innerHTML=`No existe el usuario`;
    }
}

// Opcion para eliminacion de usuarios

function eliminarUsuario (){
    let emailIngresado=document.getElementById('email').value;

    let encontrarUsuario=listadoDeUsuarios.findIndex((usuario)=>{
        return usuario.email === emailIngresado;
    })
    if(encontrarUsuario === -1){
        mensajeIngreso.innerHTML=`No existe el usuario`
    }
    listadoDeUsuarios.splice(encontrarUsuario, 1);
    mensajeIngreso.innerHTML=`Se ha eliminado el usuario`
}

// Opcion para mostrar el listado de usuarios 

function mostrarUsuarios (){
    let msg = '';
    if (listadoDeUsuarios.length > 0){
        listadoDeUsuarios.forEach ((usuario)=> {
            msg.innerHTML += `Nombre y Apellido, ${usuario.nombre} ${usuario.apellido} - Email ${usuario.email} `
        });
        } 
        else{
            msg.innerHTML=`No hay usuarios ingresados`;
        }
        alert(msg);
}