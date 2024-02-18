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

function computerSelection () {
    const choices = ['rock', 'paper', 'scissors']
    let a = Math.random()
    let b = Math.floor(a*10)
  
    if(b === 0 ||b ===  1 ||b ===  4 ||b ===  7 ){
         c = 0
    } else  if(b === 2 || b === 5 ||b ===  8 ){
         c = 1
    } else if(b === 3 ||b ===  6 ||b ===  9 ){
        c = 2
    }
    let computer = choices[c]
    console.log()
    // rock.addEventListener('click', ))
};

