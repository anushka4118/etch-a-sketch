const container = document.querySelector('.container');
const cell = document.querySelector('cell')


function makeGrid(gridSize, colorChooser) {
    container.style.gridTemplateColumns =`repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (var i=0; i < gridSize * gridSize; i++){
        let containerCell = document.createElement('div');
        containerCell.className = 'cell';

        containerCell.addEventListener("mouseenter", function(){
            containerCell.style.backgroundColor = colorChooser();
        })
        container.appendChild(containerCell);
    }
}

makeGrid(16, function(){
    return 'black';
});

function resetGrid() {
    container.innerHTML = '';
    makeGrid(16, function(){
        return 'black';
    });
}

function resizeGrid() {
    container.innerHTML = '';
    let newGridSize = prompt("What size would you like to set the grid to?");
    let color = prompt("What color would you like?");
 
    makeGrid(newGridSize, function(){
       return color;
    });
}

function randomColor() {
    container.innerHTML = '';

    makeGrid(16, function(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

        return rgb;
    });
}
