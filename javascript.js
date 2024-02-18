const display = document.querySelector('.display');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('buttons');

function userSelection(){
    rock.addEventListener('click', function () { display.textContent = 'rock', computerSelection()})
    paper.addEventListener('click', function () { display.textContent = 'paper', computerSelection()})
    scissors.addEventListener('click', function () { display.textContent = 'scissors', computerSelection()})
};
userSelection()
//buttons.forEach( (button) => addEventListener('click', console.log('click')) )

