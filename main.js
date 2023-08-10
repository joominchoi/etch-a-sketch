const grid = document.querySelector(".grid");
const squares = document.getElementsByClassName("square")

let gridStyle = window.getComputedStyle(grid)
let gridHeight = Number(gridStyle.getPropertyValue('height').replace('px', ''));

numberPerSide = 75
squareSize = (gridHeight - (numberPerSide * 2)) / numberPerSide

function makeGrid() {
	for (i = 1; i <= numberPerSide; i++) {
		for (j = 1; j <= numberPerSide; j++) {
			const row = document.createElement("div");
			row.classList.add("square");
			grid.appendChild(row);

		}
	}
}

grid.style.gridTemplateColumns = `repeat(${numberPerSide}, auto)`;

function updateSquareSize(){
  Array.from(squares).forEach(function(square) {
      square.style.height = `${squareSize}px`;
      square.style.width = `${squareSize}px`;
  });
}

makeGrid();
updateSquareSize();

for (let square of squares) {
	square.addEventListener(
		"mouseover",
		(event) => {
			event.target.style.background = "orange";
		}
	)
}

