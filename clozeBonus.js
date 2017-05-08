var ClozeCard = require("./ClozeCard");
var cardInfo = require("./cloze.json");
var inquirer = require("inquirer");

startGame();

function startGame() {
  
  var newCard;
  var cardArray = [];
  var initialScore = 0;
  var cardPosition = 0;

  for (var i = 0; i < cardInfo.length; i++) {
   	 newCard = new ClozeCard(cardInfo[i].partial, cardInfo[i].cloze);
     cardArray.push(newCard);
   }
 
   if (cardPosition < cardArray.length){
  	playRound(initialScore, cardArray, cardPosition );
   }

}

function playRound(currentScore, cardArray, currentIndex) {
  if (currentIndex < cardArray.length) {
    askUser(cardArray, currentIndex, currentScore);
  }
  else {
    stopGame(currentScore);
  }
}

function askUser(cardArray, currentIndex, currentScore) {

  var card = cardArray[currentIndex];

  inquirer.prompt([{
    type: "input",
    name: "text",
    message: card.partial + "\nAnswer:"

  }]).then(function(answer) {

    if (answer.text.trim().toLowerCase() === card.cloze.trim().toLowerCase()) {
      currentScore++;
      console.log("\nCorrect!");
    }

    else {
      console.log("\nIncorrect :(!");
    }
    currentIndex++;
    console.log("-------------------------\n");
    playRound(currentScore, cardArray, currentIndex);
  });
}


function stopGame(score) {

  console.log("Game over!\nYour total score :", score);

  inquirer.prompt([{
    type: "input",
    name: "text",
    message: "Do you want to Play again?"
    
  }]).then(function(answer) {

    if (answer.text.charAt(0).toLowerCase() === "y") {
      startGame();
    } 
    else {
      console.log("Goodbye!");
    }
  });
}

	
