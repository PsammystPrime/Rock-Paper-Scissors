const user = document.querySelector('.displayUser');
const display = document.querySelector('.displayWinner');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('buttons');


function userSelection(){
    user.textContent = ''
    rock.addEventListener('click', function () { user.textContent = 'rock', computerSelection()})
    paper.addEventListener('click', function () { user.textContent = 'paper', computerSelection()})
    scissors.addEventListener('click', function () { user.textContent = 'scissors', computerSelection()})

};
userSelection()
//buttons.forEach( (button) => addEventListener('click', console.log('click')) )
let computer = '';

function computerSelection () {
    const choices = ['rock', 'paper', 'scissors']
    // let a = Math.random()
    // let b = Math.floor(a*10)
  
    // if(b === 0 ||b ===  1 ||b ===  4 ||b ===  7 ){
    //      c = 0
    // } else  if(b === 2 || b === 5 ||b ===  8 ){
    //      c = 1
    // } else if(b === 3 ||b ===  6 ||b ===  9 ){
    //     c = 2
    // }
    let randomNum = Math.floor(Math.random()*choices.length)
    computer = choices[randomNum]
    console.log(computer)

    checkWinner()

      return computer
};

function checkWinner() {
if (computer === user.textContent){
  return display.textContent = 'draw'
} if(computer === 'rock' && user.textContent === 'scissors'){
   return display.textContent ='Computer wins'
} if(computer == 'scissors' && user.textContent == 'paper'){
   return display.textContent ='Computer wins'
} if(computer == 'paper' && user.textContent == 'rock'){
   return display.textContent ='Computer wins'
}else{
    display.textContent = 'You win'
}
}
