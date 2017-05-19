/*var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var fotos = document.getElementById("imagenes");
var ekis = document.createElement("i")
ekis.setAttribute("class", "fa fa-times")
ekis.setAttribute("aria-hidden", "true")


pictures.forEach(function(cv){
	var imagen = document.createElement("img");
	imagen.setAttribute("class", "panditas");
	imagen.setAttribute("src", cv);
	fotos.appendChild(imagen);
});

<i class="fa fa-times" aria-hidden="true"></i>

	var boton =	document.getElementById("mostrar");
	boton.addEventListener("click", function(e){
		e.classList.toggle("texto2");
		});*/
var texto=document.getElementById("texto2")
	
var algo = document.getElementById("mostrar");
algo.addEventListener("click", function(){

texto.remove(algo)
});