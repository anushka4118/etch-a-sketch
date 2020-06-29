const container = document.querySelector('.container');
const cell = document.querySelector('cell')


function makeGrid(gridSize) {
    container.style.gridTemplateColumns =`repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (var i=0; i < gridSize * gridSize; i++){
        let containerCell = document.createElement('div');
        containerCell.className = 'cell';

        containerCell.addEventListener("mouseenter", function(){
            containerCell.style.backgroundColor = 'black';
        })

        container.appendChild(containerCell);
    }
}

makeGrid(16);

function resetGrid() {
    container.innerHTML = '';
    makeGrid(16);
}

function resizeGrid() {
    container.innerHTML = '';
    let newGridSize = prompt("What size would you like to set the grid to?");
    makeGrid(newGridSize);
}

