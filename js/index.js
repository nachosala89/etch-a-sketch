function makeGrid(sideSquares) {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${sideSquares}, 1fr)`;
    for (let i = 1; i <= sideSquares; i++) {
        for (let j = 1; j <= sideSquares; j++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.setAttribute('style', `grid-column: ${j}; grid-row: ${i}`);
            container.appendChild(div);
        }
    }
}

function selectSquares() {
    const squares = document.querySelectorAll('.cell');
    squares.forEach(function(square) {
        square.addEventListener("mouseover", function(event) {
            event.target.classList.add("cell-hover");
        })
    });
    return squares;
}

function removeGrid(squares) {
    squares.forEach(function(square) {
        square.remove();
    });
}

function selectRainbow() {
    const squares = document.querySelectorAll('.cell');
    squares.forEach(function(square) {
        square.addEventListener("mouseover", function(event) {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            event.target.style.opacity = '1';
            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    });
    return squares;
}

function selectGray() {
    const squares = document.querySelectorAll('.cell');
    squares.forEach(function(square) {
        let opacity = 0.1;
        square.addEventListener("mouseover", function(event) {
            opacity += 0.1;
            event.target.style.opacity = `${opacity}`;
        })
    });
    return squares;
}

let sideSquares = 16;
makeGrid(sideSquares);
let squares = selectSquares();
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    do {
        sideSquares = prompt("Insert the number of squares per side (<100)", "16");
    } while (sideSquares > 100 || sideSquares <= 0 && sideSquares != null);
    removeGrid(squares);
    makeGrid(sideSquares);
    squares = selectSquares();
});

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () => {
    removeGrid(squares);
    makeGrid(sideSquares);
    squares = selectRainbow();
});

const gray = document.querySelector('#gray');
gray.addEventListener('click', () => {
    removeGrid(squares);
    makeGrid(sideSquares);
    squares = selectGray();
});