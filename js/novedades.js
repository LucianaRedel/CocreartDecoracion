
let botonEnviar = document.getElementById('mensaje')
botonEnviar.addEventListener('click', (e)=>{
    e.preventDefault();

    Swal.fire({
        icon: "success",
        title: "Su mensaje se ha enviado, le responderemos a la brevedad",
        timer: 100,
        background: "linear-gradient(red, orange, pink, white)",
    });
        document.getElementById('nombreMensaje').value="";
        document.getElementById('emailMansaje').value="";
        document.getElementById('mensaje').value="";
})


