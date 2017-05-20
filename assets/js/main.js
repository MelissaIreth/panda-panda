(function eliminarPandas(){
    var AllPandas = Array.from(document.querySelectorAll(".pandas span"));
    var div = Array.from(document.querySelectorAll('.pandita div'))

    var restaurar = document.getElementById("restaurar");
    restaurar.addEventListener("click", function(){
        AllPandas.forEach(function(e){
            e.parentElement.classList.remove("nada");
        });        
    });


    AllPandas.forEach(function(e){
        e.addEventListener("click", function(){
            console.log(e);
            this.parentElement.classList.add("nada");
        });
    });

})()


var texto1 = document.getElementById("texto1")
var origin = document.getElementById("origin");
origin.addEventListener("click", function(){

texto1.remove(origin)
});

var texto2 = document.getElementById("texto2")
var exting = document.getElementById("exting");
exting.addEventListener("click", function(){

texto2.remove(exting)
});