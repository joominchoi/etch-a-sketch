const container = document.querySelector(".grid");

numberPerSide = 5

container.style.gridTemplateColumns = `repeat(${numberPerSide}, auto)`;

function makeGrid() {
	for (i = 1; i <= numberPerSide; i++) {
		for (j = 1; j <= numberPerSide; j++) {
			const row = document.createElement("div");
			row.classList.add("square");
			container.appendChild(row);
			
		}
	}
}

makeGrid();

const squares = document.getElementsByClassName("square")

for (let square of squares) {
	square.addEventListener(
				"mouseover",
				(event) => {
					event.target.style.background = "orange";
				}
			)
}
