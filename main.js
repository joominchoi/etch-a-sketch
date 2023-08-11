const DEFAULT_NUMBER_PER_SIDE = 10

const grid = document.querySelector(".grid");
const squares = document.getElementsByClassName("square")
const gridSizeButton = document.getElementById("gridSizeButton")

const gridStyle = window.getComputedStyle(grid)
const gridHeight = Number(gridStyle.getPropertyValue('height').replace('px', ''));

function makeGrid(numberPerSide) {
	for (i = 1; i <= numberPerSide; i++) {
		for (j = 1; j <= numberPerSide; j++) {
			const row = document.createElement("div");
			row.classList.add("square");
			grid.appendChild(row);
		}
	}
}

function updateGridSize(numberPerSide) {
	grid.style.gridTemplateColumns = `repeat(${numberPerSide}, auto)`;
}

function updateSquareSize(numberPerSide) {
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

gridSizeButton.addEventListener("click", changeGridSize)

function changeGridSize() {
	numberPerSide = prompt("Grid size: Please enter a number between 0-100", `${DEFAULT_NUMBER_PER_SIDE}`);

	if ((numberPerSide > 0) && (numberPerSide <= 100)) {
		removeGrid();
		makeGrid(numberPerSide);
		updateGridSize(numberPerSide);
		updateSquareSize(numberPerSide);
		highlight();
	} else {
		alert("Invalid number");
	}
}

window.onload = () => {
  makeGrid(DEFAULT_NUMBER_PER_SIDE);
  updateGridSize(DEFAULT_NUMBER_PER_SIDE);
	updateSquareSize(DEFAULT_NUMBER_PER_SIDE);
	highlight();
}
