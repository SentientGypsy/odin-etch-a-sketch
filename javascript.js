const canvas = document.createElement("div");
const container = document.querySelector(".container");










window.addEventListener("DOMContentLoaded", (event) => {
    for (var i = 0; i <= 15; i++){
        const canvas = document.createElement("div");
        canvas.classList.add("canvas-div");
        canvas.textContent = "%";
        container.appendChild(canvas);
        console.log("appended");
    }


    document.querySelectorAll(".canvas-div").forEach( el => {
        el.addEventListener("mouseenter", () => {
            el.setAttribute("style", "background: black");
            
            
            
        });
    });
    





});









