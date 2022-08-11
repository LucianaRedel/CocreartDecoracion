// Incorporacion y modificaciones clase DOM

// Ingreso y registracion de usuarios nuevos

class Usuario{
    constructor(nombre, apellido, contraseña){
        this.nombre=nombre.toLowerCase();
        this.apellido=apellido.toLowerCase();
        this.contraseña=contraseña.toLowerCase();
    }  
}

function baseUsuarios(){

const usuarios=[];

usuarios.push(new Usuario('Andres','Santos','autos'));
usuarios.push(new Usuario('Carolina','Bustamante','venezuela'));
usuarios.push(new Usuario('Mariana','Quiroga','tortas'));
usuarios.push(new Usuario('Laura','Escobar','calle corrientes'));

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

// Definiciones para el ingreso a la pagina

let nombreIngresado;
let apellidoIngresado;
let contraseñaIngresado; 

let botonIngresar = document.getElementById('ingresar')
botonIngresar.addEventListener('click', Ingresar)

function Ingresar(){
    nombreIngresado=document.getElementById('nombreIngreso').value;
    apellidoIngresado=document.getElementById('apellidoIngreso').value;
    contraseñaIngresado=document.getElementById('claveDeIngreso').value;

    let listadoDeUsuarios=baseUsuarios();

    let usuarioIngresado=listadoDeUsuarios.find(((usuario)=>usuario.nombre==nombreIngresado) && ((usuario)=>usuario.apellido==apellidoIngresado));
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