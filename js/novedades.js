
let botonEnviar = document.getElementById('mensajeEnviado')
botonEnviar.addEventListener('click', ()=>{

    Swal.fire({
        icon: "success",
        title: "Su mensaje se ha enviado, le responderemos a la brevedad",
        background: "linear-gradient(red, orange, pink, white)",
    });
        document.getElementById('nombreMensaje').value="";
        document.getElementById('emailMansaje').value="";
        document.getElementById('mensaje').value="";
})


