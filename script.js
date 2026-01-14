// select container for all square div 
const squareDivContainer = document.querySelector(".square-div-container");

// create 16 * 16 grid
for (let i = 0; i < 16; i++) {
    const columnSquareDiv = document.createElement("div")
    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("pixel-box");
        columnSquareDiv.appendChild(squareDiv);
    }
    squareDivContainer.appendChild(columnSquareDiv);
}


// hover and change color (add a new division and change)
document.querySelectorAll(".pixel-box").forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
});