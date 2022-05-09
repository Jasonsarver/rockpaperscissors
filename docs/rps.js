const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice =""
let computerChoice =""
let result =""

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = "You picked: " + userChoice
  generateComputerChoice()
  gameResult()
}))

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3)
  
  if (randomNumber === 0) {
    computerChoice = "rock"
  }
  if (randomNumber === 1) {
    computerChoice = "paper"
  }
  if (randomNumber === 2) {
    computerChoice = "scissors"
  }
  computerChoiceDisplay.innerHTML = "Computer picked " + computerChoice
}

function gameResult(){
  if(computerChoice === userChoice){
    result = "it's a draw"
  }
  if(computerChoice === "rock" && userChoice === "paper"){
    result = "you win"
  }
  if(computerChoice === "rock" && userChoice === "scissors"){
    result = "you lose"
  }
  if(computerChoice === "rock" && userChoice === "scissors"){
 
    result = "you lose"
  }
  if(computerChoice === "paper" && userChoice === "rock"){
 
    result = "you lose"
  }
  if(computerChoice === "paper" && userChoice === "scissors"){
    result = "you win"
  }
  resultDisplay.innerHTML = result
}