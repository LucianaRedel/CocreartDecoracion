// Incorporacion y modificaciones clase DOM

// Ingreso de usuarios

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

function baseUsuarios(){

const usuarios=[];

usuarios.push(new Usuario(0, 'Andres','Santos', 'asantos@gmail.com','autos', 'Av Cordoba 11', 'Capital Federal', '1001'));
usuarios.push(new Usuario(1, 'Carolina','Bustamante', 'carolinabustamante@gmail.com','venezuela', 'Avellaneda 124', 'Buenos Aires', '1340'));
usuarios.push(new Usuario(2, 'Mariana','Quiroga', 'marianaquiroga@gmail.com','tortas', 'Av Saenz 1340', 'Capital Federal', '1221'));
usuarios.push(new Usuario(3, 'Laura','Escobar', 'lauraescobar@gmail.com','calle corrientes', 'Miraflores 2202', 'Buenos Aires', '1720'));

return usuarios;

}

baseUsuarios();



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
            //document.querySelector('#seccionComprar').style.display='none';
            //mensaje.innerText='Bienvenido a CocreArt' + ' ' + nombreIngresado + ' ' + apellidoIngresado;
            window.location = "comprar1.html"
        }
        else{
            mensajeIngresoError.innerText=`Por favor reingrese los datos correctos para ingresar a la pagina`;
        }
    }
    else{
        mensajeIngreso.innerText=`No existe el usuario`;
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

