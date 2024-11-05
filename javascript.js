const canvas = document.createElement("div");
const container = document.querySelector(".container");


for (var i = 0; i <= 15; i++){
    const canvas = document.createElement("div");
    canvas.classList.add("canvas-div");
    canvas.textContent = "%";
    container.appendChild(canvas);
    console.log("appended");
}

const canvas_div = document.querySelector(".canvas-div");

canvas_div.addEventListener("mouseenter", () => {
    
});