const user = document.querySelector('#displayUser');
const display = document.querySelector('.displayWinner');
const comp = document.querySelector('#displayComputer');
// const para = document.querySelector('.para');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
// const buttons = document.querySelectorAll('buttons');


let userSelected = ''
function userSelection(){
    user.textContent = ''
    rock.addEventListener('click', function () { userSelected = 'rock',displaySelections()})
    paper.addEventListener('click', function () { userSelected = 'paper',displaySelections()})
    scissors.addEventListener('click', function () { userSelected = 'scissors',displaySelections()})
};
userSelection()
//buttons.forEach( (button) => addEventListener('click', console.log('click')) )

function displaySelections (){
    user.textContent = `You choose ${userSelected}`
    computerSelection()
};

let computer = '';
function computerSelection () {
    const choices = ['rock', 'paper', 'scissors']

    let randomNum = Math.floor(Math.random()*choices.length)
    computer = choices[randomNum]
    comp.textContent = `computer ${''} chooses  ${computer}`

    checkWinner()
};


function checkWinner() {
    display.textContent = ''
if (computer === userSelected){
  return display.textContent = 'draw'
} if(computer === 'rock' && userSelected.includes('scissors')){ 
   return display.textContent ='Computer wins'
} if(computer === 'scissors' && userSelected === 'paper'){
   return display.textContent ='Computer wins'
} if(computer === 'paper' && userSelected === 'rock'){
   return display.textContent ='Computer wins'
}else{
    display.textContent = 'You win'
}
};
