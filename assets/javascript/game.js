// THE BEGINNING OF MY JAVASCRIPT/jQUERY CRYSTALS ASIGNMENT 

//THIS IS CRUCIAL! THIS IS WHAT GETS OUR JQUERY TO WORK 
$( document ).ready(function(){

    //SELECTS A RANDOM NUMBER TO BE REACHED BY CLICKING ON CRYSTALS
    //THE NUMBER TO BE REACHED MUST BE BETWEEN 19 AND 120
    // THIS IS WHERE MOE HELPED ME FIGURE OUT THE CODE BUT I COULDNT REMEMBER WHY HE SAID WE MUST ADD 1 
    var Random=Math.floor(Math.random()*101+19)
    
//APPENDING
//DISPLAYING "APPENDING" RANDOM NUMBER TO THE randNum ID IN HTML FILE VIA DYNAMIC 
$('#randNumb').text(Random);


// CREATING VARIABLES AND RANDOM NUMBERS BETWEEN 1-12 FOR EACH CRYSTAL
//GOOGLED THIS CODE, IT IS DRY CODING BUT I COULDNT FIGURE OUT HOW TO GIVE EACH CRYSTAL THEIR OWN UNIQUE VALUE 
green = Math.floor(Math.random()*11+1)
yellow = Math.floor(Math.random()*11+1)
red = Math.floor(Math.random()*11+1)
blue = Math.floor(Math.random()*11+1)

//THESE ARE THE VARIABLES FOR MY COUNTERS
var totalScore= 0; 
var winsCounter= 0;
var lossesCounter= 0;

//USING JQUERY TO UPDATE HTML FILE VIA DYNAMIC 
$('#numbWins').text(winsCounter);
$('#numbLosses').text(lossesCounter);


// FUNCTIONS GO IN BELOW
//NEED TO ADD FUNCTION TO RESET THE GAME 
//LOOK AT HANGMAN GAME FOR FUNCTION INSPIRATION 

function resetGame (){
    Random=Math.floor(Math.random()*101+19);
    $('#randNumb').text(Random);

    green= Math.floor(Math.random()*11+1);
    yellow= Math.floor(Math.random()*11+1);
    red= Math.floor(Math.random()*11+1);
    blue= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#playerScores').text(totalScore);
    } 

// THIS FUNCTION ADDS WINS TO THE TOTAL SCORE IF PLAYER WINS
function winner() {
    alert("You won!");
  winsCounter++; 
  $('#numbWins').text(winsCounter);
  resetGame();
}

//ADDS LOSSES TO THE TOTAL SCORE 
function loser () {
    alert ("You lose!");
      lossesCounter++;
      $('#numbLosses').text(lossesCounter);
      resetGame()
    }

//USING JQUERY WE MAKE THE CRYSTALS CLICKABLE BY ADDING EVENT LISTENERS 
//Creating multiple crystals each with their own unique number value.
//COULDNT FIGURE IT OUT HOW TO DO IT IN ONE CODE LIKE THE INCLASS ACTIVITY, I WENT WITH A YOUTUBE TUTORIAL
//CLICK EVENT FOR GREEN CRYSTAL 

  $('#green').on ('click', function(){
    totalScore = totalScore + green;
    $('#playerScores').text(totalScore); 
//SETTING UP CONDITIONALS FOR WINS and LOSSES 
//IT WILL EXECUTE WINNER FUNCTION FIRST IF TOTAL SCORE EQUALS RANDOM
 if (totalScore == Random){
          winner();
        }
else if (totalScore > Random){
          loser();
        }   
  })

// THE EVENT LISTENER FOR YELLOW CRYSTAL 
  $('#yellow').on ('click', function(){
    totalScore = totalScore + yellow;
    $('#playerScores').text(totalScore); 
// SETTING UP CONDITIONALS FOR WINS AND LOSSES 
        if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  

  $('#red').on ('click', function(){
    totalScore = totalScore + red;
    $('#playerScores').text(totalScore);
//SETTING UP CONDITIONALS FOR WINS AND LOSSES 
          if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  

  $('#blue').on ('click', function(){
    totalScore = totalScore + blue;
    $('#playerScores').text(totalScore);
//SETTING UP CONDITIONALS FOR WINS AND LOSSES 
          if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  });

});