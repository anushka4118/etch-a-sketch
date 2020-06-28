const container = document.querySelector('.container');

let gridSize = 16;

function makeGrid() {
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

window.onload = makeGrid();