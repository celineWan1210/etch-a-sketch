// select container for all square div 
const bigContainer = document.querySelector(".square-div-container");

function createContainer() {
    const squareDivContainer = document.createElement("div");
    bigContainer.appendChild(squareDivContainer);
    squareDivContainer.classList.add("grid-container")
    return squareDivContainer;
}

// create 16 * 16 grid
let userInput;
function createGrid(userInput) {
    squareDivContainer = createContainer()
    for (let i = 0; i < userInput; i++) {
        const columnSquareDiv = document.createElement("div");
        for (let j = 0; j < userInput; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("pixel-box");
            const desired_width = 960 / userInput;
            
            // fit to desired size
            squareDiv.style.width = desired_width + "px";
            squareDiv.style.height = desired_width + "px";
            columnSquareDiv.appendChild(squareDiv);
        }
        squareDivContainer.appendChild(columnSquareDiv);
    }
}

// select button
const resetButton = document.querySelector(".reset");
document.addEventListener("click", () => {
    do {
        userInput = prompt("Enter number of square per side (1 - 100)");
        userInput = Number(userInput);
    } while (userInput > 100 || userInput < 0);

    // remove all grid
    squareDivContainer.remove();
    createGrid(userInput);
    hover();
})

function hover() {
    // hover and change color (add a new division and change)
    document.querySelectorAll(".pixel-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
    });
}


// initial setup 
createGrid(16);
hover();