const container = document.querySelector(".container");

function makeGrid() {
	for (i = 1; i <= 16; i++) {
		for (j = 1; j <= 16; j++) {
			const row = document.createElement("div");
			row.classList.add("grid")
			container.appendChild(row);
		}
	}
}

makeGrid();

const grid = document.getElementsByClassName("grid")

for (let square of grid) {
	square.addEventListener(
				"mouseover",
				(event) => {
					event.target.style.background = "orange";
				}
			)
}
