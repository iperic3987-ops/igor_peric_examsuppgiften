const colors = {
    q: "red",
    w: "blue",
    e: "green",
    r: "pink",
   
    
};

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const el = document.getElementById(key);

    if (el && colors[key]) {
        el.style.backgroundColor = colors[key];
    }
});

document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    const el = document.getElementById(key);

    if (el) {
        el.style.backgroundColor = "";
    }
});