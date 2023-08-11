const grid = document.querySelector(".grid");
const squares = document.getElementsByClassName("square")
const gridSizeButton = document.getElementById("gridSizeButton")

const gridStyle = window.getComputedStyle(grid)
const gridHeight = Number(gridStyle.getPropertyValue('height').replace('px', ''));

let numberPerSide = 50

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
	let squareSize = (gridHeight - (numberPerSide * 2)) / numberPerSide

	Array.from(squares).forEach(function (square) {
		square.style.height = `${squareSize}px`;
		square.style.width = `${squareSize}px`;
	});
}

function removeGrid() {
	while (squares.length > 0) {
		squares[0].remove();
	}
}

function randomColorGen() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function highlight() {
	for (let square of squares) {
		square.addEventListener(
			"mouseover",
			(event) => {
				event.target.style.background = randomColorGen();
			}
		)
	}
}

gridSizeButton.addEventListener("click", myFunc)

function myFunc() {
	numberPerSide = prompt("Grid size: Please enter a number between 0-100", `${numberPerSide}`);
	squareSize = (gridHeight - (numberPerSide * 2)) / numberPerSide

	if ((numberPerSide > 0) && (numberPerSide <= 100)) {
		removeGrid();
		makeGrid();
		updateGridSize();
		updateSquareSize();
		highlight();
	} else {
		alert("Invalid number");
	}
}

window.onload = () => {
  makeGrid();
  updateGridSize();
	updateSquareSize();
	highlight();
}
