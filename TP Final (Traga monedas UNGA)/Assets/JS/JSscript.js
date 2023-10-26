var botonini = document.getElementById("iniciar"); //boton comenzar
var oculto = document.getElementById("oculto"); // la seccion oculta del minijuego
var usuario = document.getElementById("usuario"); //guardamos el div donde se pondria el nombre del usuario
var plata =  document.getElementById("plata"); //guardamos el div donde se pondria la plata del usuario
var nombre = "";








botonini.onclick = function(){
oculto.style.display="block";
botonini.style.display="none";
nombre = prompt("ingrese su nombre");
usuario.innerHTML = (nombre.toUpperCase());
}











//Funciones
