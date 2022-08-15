
// Registracion de nuevos usuarios

let listadoDeUsuarios=[];

let botonRegistrar = document.getElementById('registrar')
botonRegistrar.addEventListener('click', registrarUsuario)



function registrarUsuario(){
    let id='';
    let nombre= document.getElementById('registroNombre').value;
    let apellido= document.getElementById('registroApellido').value;
    let email=document.getElementById('registroEmail').value;
    let contraseña=document.getElementById('registroClave').value;
    let direccion=document.getElementById('registroDireccion').value;
    let ciudad=document.getElementById('registroCiudad').value;
    let codigoPostal=document.getElementById('registroCodigo').value;

    const usuarios = {};
    if (listadoDeUsuarios.length === 0){
        let id=1 
        usuarios = new Usuario (id, nombre, apellido, email, contraseña, direccion, ciudad, codigoPostal);
    }
    else{
        const id = listadoDeUsuarios[listadoDeUsuarios.length - 1].id + 1;
        usuarios = new Usuario (id, nombre, apellido, email, contraseña, direccion, ciudad, codigoPostal);
    }
}
