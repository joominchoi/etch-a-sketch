const grid = document.querySelector(".grid");
const squares = document.getElementsByClassName("square")
const gridSizeButton = document.getElementById("gridSizeButton")

const gridStyle = window.getComputedStyle(grid)
const gridHeight = Number(gridStyle.getPropertyValue('height').replace('px', ''));

let numberPerSide = 5
let squareSize = (gridHeight - (numberPerSide * 2)) / numberPerSide

function makeGrid() {
	for (i = 1; i <= numberPerSide; i++) {
		for (j = 1; j <= numberPerSide; j++) {
			const row = document.createElement("div");
			row.classList.add("square");
			grid.appendChild(row);
		}
	}
}

function updateGridSize() {
	grid.style.gridTemplateColumns = `repeat(${numberPerSide}, auto)`;
}

function updateSquareSize() {
	Array.from(squares).forEach(function (square) {
		square.style.height = `${squareSize}px`;
		square.style.width = `${squareSize}px`;
	});
}

function removeGrid() {
	while(squares.length > 0) {
		squares[0].remove();
 }
}

makeGrid();
updateGridSize();
updateSquareSize();

for (let square of squares) {
	square.addEventListener(
		"mouseover",
		(event) => {
			event.target.style.background = "orange";
		}
	)
}

// Apply the addEventListener method
gridSizeButton.addEventListener("click", myFunc)

// Defining the myFunc function
function myFunc() {

	// Increase the existing value by 1      
	// Use the parseInt method to convert the existing      
	// value (which is in string format) into integer
	console.log("Hello")

	numberPerSide = prompt("Grid size: Please enter a number between 0-100", `${numberPerSide}`);
	squareSize = (gridHeight - (numberPerSide * 2)) / numberPerSide
	
	if ((numberPerSide > 0) && (numberPerSide <= 100)) {
		removeGrid();
		makeGrid();	
		updateGridSize();
		updateSquareSize();
	} else {
		alert("Invalid number");
	}

	console.log(numberPerSide)
	console.log(squareSize)
	// if (person != null) {
	// 	document.getElementById("demo").innerHTML =
	// 		"Hello " + person + "! How are you today?";
	// }
}
