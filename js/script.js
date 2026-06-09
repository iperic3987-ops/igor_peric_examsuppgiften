document.addEventListener("keydown", function(event){

    document.getElementById(event.key.toLowerCase()).style.backgroundColor = "blue";
});

document.addEventListener("keyup", function(event){

    document.getElementById(event.key.toLowerCase()).style.backgroundColor = "";

});