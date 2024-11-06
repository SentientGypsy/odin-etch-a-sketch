const canvas = document.createElement("div");
const container = document.querySelector(".container");
let buttonSize = 16;





function buildCanvas(buttonSize) {
    const containerSize = 500;
    const squareSize = Math.floor((containerSize - (buttonSize -1))/ buttonSize);


    for (var i = 1; i <= buttonSize; i++){
        for (var j = 1; j <=buttonSize; j++) {
            const canvas = document.createElement("div");
            canvas.classList.add("canvas-div");
            canvas.style.width = `${squareSize}px`;
            canvas.style.height = `${squareSize}px`;
            canvas.style.flex = "1 0 auto";
            
            container.appendChild(canvas);
            console.log("appended");

        }


        }

        
}

function destroyCanvas() {
    document.querySelectorAll(".canvas-div").forEach (el => {
        container.removeChild(el);
    });



}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function appendEventListeners(){
    document.querySelectorAll(".canvas-div").forEach( el => {
        el.addEventListener("mouseenter", () => {
            let newColor = generateRandomColor();
            el.setAttribute('style', el.getAttribute('style')+'; background-color:' + newColor );

            
            
        });
    });
    
}





window.addEventListener("DOMContentLoaded", (event) => {
    
    buildCanvas(buttonSize);

    appendEventListeners();
    
    

    const size_button = document.querySelector(".size-button");
    size_button.addEventListener("click", () => {
        console.log(buttonSize);
        buttonSize = prompt("Enter a number from 1-100");
        console.log(buttonSize);
        document.querySelectorAll(".canvas-div").forEach( el => {

            el.setAttribute("style", "background: white");
                
        });
        destroyCanvas();
        buildCanvas(buttonSize);
        appendEventListeners();
        



    });



});









