
document.getElementById("estados").onchange = () =>    
    localStorage.setItem("estado",document.getElementById("estados").value);


if(localStorage.estado) {
    document.getElementById("estados").value = localStorage.estado;
}
