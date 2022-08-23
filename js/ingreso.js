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

let usuarios=[]

usuarios.push(new Usuario(0, 'Andres','Santos', 'asantos@gmail.com','autos', 'Av Cordoba 11', 'Capital Federal', '1001'));
usuarios.push(new Usuario(1, 'Carolina','Bustamante', 'cbustamante@gmail.com','venezuela', 'Avellaneda 124', 'Buenos Aires', '1340'));
usuarios.push(new Usuario(2, 'Mariana','Quiroga', 'mquiroga@gmail.com','tortas', 'Av Saenz 1340', 'Capital Federal', '1221'));
usuarios.push(new Usuario(3, 'Laura','Escobar', 'lescobar@gmail.com','calle corrientes', 'Miraflores 2202', 'Buenos Aires', '1720'));
usuarios.push(new Usuario(4, 'Marcelo', 'Gonzalez', 'mgonzalez@gmail.com', 'bpcs', 'Maura 105', 'Capital Federal', '1690'));

return usuarios;

}

listadoDeUsuarios = baseUsuarios();



// Guardo los usuarios en el local storage, con una funcion 

const GuardarUsuario=()=>{

       let usuariosGuardados = localStorage.setItem('usuariosGuardados', JSON.stringify(listadoDeUsuarios));
       return usuariosGuardados;

    }



// Recuperar los usuarios guardados

const RecuperarUsuarios=()=>{
    const usuariosRecuperados=JSON.parse(localStorage.getItem('usuariosGuardados'));

    const arrayUsuarios=[]; 
    for (const objeto of usuariosRecuperados)
    arrayUsuarios.push(new Usuario(objeto. id, objeto.nombre, objeto.apellido, objeto.email, objeto.contraseña, objeto.direccion, objeto.ciudad, objeto.codigoPostal));


    let listadoDeUsuarios= arrayUsuarios
    console.log(listadoDeUsuarios);
    return listadoDeUsuarios;
}



// Definiciones para el ingreso a la pagina



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
    

    let listadoDeUsuarios = baseUsuarios();
    //let listadoDeUsuarios = RecuperarUsuarios();

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
        mensajeIngreso.innerText=`No existe el usuario`;
    }
}

// Opcion para eliminacion de usuarios // No esta funcionando en la pagina 

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

// Opcion para mostrar el listado de usuarios // no esta funcionando en la pagina

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

