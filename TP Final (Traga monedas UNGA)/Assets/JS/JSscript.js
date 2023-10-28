//Inicio del juego
//boton comenzar
var botonini = document.getElementById("iniciar"); //boton comenzar
var oculto = document.getElementById("oculto"); // la seccion oculta del minijuego
var sectionini = document.querySelector("section");


//header
var usuario = document.getElementById("usuario"); //guardamos el div donde se pondria el nombre del usuario
var plata =  document.getElementById("plata"); //guardamos el div donde se pondria la plata del usuario
var botondinero = document.getElementById("apuesta"); //guardamos el boton de apuesta
var headprinci = document.querySelector("header"); //guardamos el header

var nombre = "";

var pozo = 0;
var palanca = document.getElementById("palanca");
var slots = document.getElementsByClassName("slot");
console.log(slots);
var imagenes = ["Assets/Imagenes/Diamante.png","Assets/Imagenes/Zapallo.png","Assets/Imagenes/Papa.png","Assets/Imagenes/Enano.png","Assets/Imagenes/Doc.png", "Assets/Imagenes/Cherry.png"];//array de las imagenes de los slots
var intervalo = "";
var intervalo2 = "";



botonini.onclick = function(){
oculto.style.display="block";
sectionini.style.display="none"
botonini.style.display="none";
headprinci.style.display="flex"
nombre = prompt("ingrese su nombre");
usuario.innerHTML = (nombre.toUpperCase());
}
botondinero.onclick = function(){
while(pozo<100){
pozo = parseInt(prompt("Ingrese un monto (debe ser un minimo de 100"));
}
plata.innerHTML = (pozo);
botondinero.innerHTML = ("Agregar saldo");
}

palanca.onclick = function(){
intervalo = setInterval(function(){
	slots[0].setAttribute("src",imagenes[random()])
},700);
}

document.getElementById("frenado").onclick = function(){
intervalo2 = setTimeout(function(){
	clearInterval(intervalo);
},13000);
}
//funciones
function random(){
return Math.round(Math.random() * (imagenes.length - 1));
}





//Funciones
