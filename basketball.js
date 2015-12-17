var promptForPlayerName = function (playerNumber1) {
    var name = prompt(playerNumber1 + " what is your name?");
    return name; 
};
var tryTwoPointShot = function () {
    var randOne = Math.random();
    var randTwo = Math.random(); 
   if (randOne > 0.2 &&	randTwo > 0.2) { 
    return true;
   }else {
    return false; 
   }
  

}

var tryThreePointShot = function() {
    var randOne = Math.random();
    var randTwo = Math.random();
     if (randOne <= 0.2 || randTwo >= 0.8){ 
         return true; 
     } 
     else {
         return false; 
     }

      
    }

var getShotString = function(playerName,points,wasSuccessful) {
    if (wasSuccessful === true) { 
        return playerName + "attempted a " + points + " pointer. It was good";
    }
        else{
         return playerName = "attempted a " + points + " pointer. It was not good"; 
        }
}

var updateScore = function(wasShotMade,currentScore,points) { 
    if (wasShotMade === true){ 
        return currentScore + points; 
        }
    else{
        return currentScore;
    }
}

var isEndOfGame = function (currentScore,playerName){
    if (currentScore >= 20){
    alert("The game is over " + playerName + " won"); 
    return true; 
    }
    else{ 
    return false; 
}
} 

    