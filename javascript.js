

function playRound(playerSelection, computerSelection){
return {playerSelection, computerSelection}
}

const playerSelection=prompt('ROCK,PAPER OR SCISSORS?').toLowerCase();

const computerSelection=getComputerChoice();
function getComputerChoice(){
    const words=[]
    words[0]='rock'
    words[1]='paper'
    words[2]='scissors'
    const index= Math.floor(Math.random()*words.length);
    return words[index]
    }
    console.log(playRound(playerSelection, computerSelection))

const rock='paper'>'rock'>'scissors'
const scissors='rock'>'scissors'>'paper'
const paper='scissors'>'paper'>'rock'

function roundResult(){
   
    
if (playerSelection==='rock' && computerSelection==='scissors'){
    return 'Rock beats Scissors,you WIN!'
}
if (playerSelection==='rock' && computerSelection==='paper'){
    return 'you LOSE!'
}
if (playerSelection===computerSelection){
    return 'DRAW'
}
if (playerSelection===''){
    return alert('Invalid')
}

if (playerSelection==='paper' && computerSelection==='rock'){
    return 'Paper beats Rock,you WIN!'
}
if (playerSelection==='paper' && computerSelection==='scissors'){
    return 'you LOSE!'
}


if (playerSelection==='scissors' && computerSelection==='paper'){
    return 'Scissors beats Paper,you WIN!'
}
if (playerSelection==='scissors' && computerSelection==='rock'){
    return 'you LOSE!'
}
}
console.log(roundResult())


function game(){
    roundOne;
    roundTwo;
    roundThree;
    roundFour;
    roundFive;

}
const roundOne=playRound(playerSelection, computerSelection);
const roundTwo=playRound(playerSelection, computerSelection);
const roundThree=playRound(playerSelection, computerSelection);
const roundFour=playRound(playerSelection, computerSelection);
const roundFive=playRound(playerSelection, computerSelection);

console.log(game());



