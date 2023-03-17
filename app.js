const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
let countDownTimerId;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    timerId = setInterval(randomSquare, 500);
    const stopMole = () => {
        clearInterval(timerId);
        clearInterval(countDownTimerId);
    }
    buttonStop.addEventListener('click', stopMole);
}


function countDown() {
    currentTime--;
        timeLeft.innerHTML = currentTime;
        if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
        currentTime = 10;
       }
}

function startGame() {
    result.innerHTML = 0;
    countDownTimerId = setInterval(countDown, 1000);
    moveMole();
    countDown();
} 

buttonStart.addEventListener('click', startGame);
