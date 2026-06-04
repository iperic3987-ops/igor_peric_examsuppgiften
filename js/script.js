const a = document.getElementById("a");
const s = document.getElementById("s");

document.addEventListener("keydown", function(event) {

    if (event.key === "a") {
        a.style.backgroundColor = "red";
    }

    if (event.key === "s") {
        s.style.backgroundColor = "blue";
    }

});

document.addEventListener("keyup", function(event) {

    if (event.key === "a") {
        a.style.backgroundColor = "";
    }

    if (event.key === "s") {
        s.style.backgroundColor = "";
    }

});