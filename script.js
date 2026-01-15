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
            const desired_width = 760 / userInput;
            
            // fit to desired size
            squareDiv.style.width = desired_width + "px";
            squareDiv.style.height = desired_width + "px";
            columnSquareDiv.appendChild(squareDiv);
        }
        squareDivContainer.appendChild(columnSquareDiv);
    }
}

function hover(color = "black") {
    // hover and change color (add a new division and change)
    document.querySelectorAll(".pixel-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = color;
        });
    });
}

// select button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    do {
        userInput = prompt("Enter number of square per side (1 - 100)", 16);
        userInput = Number(userInput);
    } while (userInput > 100 || userInput < 0);

    // remove all grid
    squareDivContainer.remove();
    createGrid(userInput);
    hover();
});

// random color hover
function randomColorHover(){
    document.querySelectorAll(".pixel-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            box.style.backgroundColor = randomColor;
        });
    });
}

// call the random hover
const randomizeButton = document.querySelector(".random-color");
randomizeButton.addEventListener("click", () => {
        randomColorHover();
});

// progressively darken effect
function darkenHover() {
    let i = 0;
    document.querySelectorAll(".pixel-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            if (i <= 10) {
                i += 1
            } else {
                i = 0;
            };

            box.style.backgroundColor = "black";
            let opacityValue = i / 10;
            box.style.opacity = opacityValue.toString();
        });
    });
}

const darkenButton = document.querySelector(".darken");
darkenButton.addEventListener("click", () => {
    darkenHover();
})


// initial setup 
createGrid(16);
hover();