
// Promesas y Fetch *API paises*

document.getElementById("btnPaises").onclick=()=>{
     Swal.fire({
         icon: "info",
         title: "Te muestro mi país",
         timer: 1500,
        background: "linear-gradient(blue, aqua, white)",
     });

    fetch('https://restcountries.com/v3.1/name/argentina')
    .then( (resp) => resp.json() )
    .then( (data) => {
        mostrarListado(data);
    })
}

mostrarListado=(data)=>{
    let listadoLI=document.getElementById('Argentina');
    listadoLI.innerHTML="";
    for(info of data){
        let nodo=document.createElement('div');
        nodo.innerHTML=`${info.name.common} /  
                        ${info.capital} /
                        ${info.subregion} /
                        <img src="${info.flags.png}" width='100' height='100' alt="...">`
        listadoLI.appendChild(nodo);
    }
}