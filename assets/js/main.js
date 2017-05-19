var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var fotos = document.getElementById("imagenes");

pictures.forEach(function(cv){
	var imagen = document.createElement("img");
	imagen.setAttribute("class", "panditas");
	imagen.setAttribute("src", cv);
	fotos.appendChild(imagen);
});