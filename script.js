// select container for all square div 
const squareDivContainer = document.querySelector(".square-div-container");

for (let i = 0; i < 16; i++) {
    const columnSquareDiv = document.createElement("div")
    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.border = "1px solid black";
        squareDiv.style.padding = "24px";
        squareDiv.style.margin = "3px";
        columnSquareDiv.appendChild(squareDiv);
    }
    squareDivContainer.appendChild(columnSquareDiv);
}
