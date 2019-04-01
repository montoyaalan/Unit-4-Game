// THE BEGINNING OF MY JAVASCRIPT/jQUERY CRYSTALS ASIGNMENT 

//THIS IS CRUCIAL! THIS IS WHAT GETS OUR JQUERY TO WORK 
$( document ).ready(function(){

    //SELECTS A RANDOM NUMBER TO BE REACHED BY CLICKING ON CRYSTALS
    //THE NUMBER TO BE REACHED MUST BE BETWEEN 19 AND 120
    // THIS IS WHERE MOE HELPED ME FIGURE OUT THE CODE BUT I COULDNT REMEMBER WHY HE SAID WE MUST ADD 1 
    var Random=Math.floor(Math.random()*101+19)
    
//APPENDING
//DISPLAYING "APPENDING" RANDOM NUMBER TO THE randNum ID IN HTML FILE 
$('#randNumb').text(Random);


// CREATING VARIABLES AND RANDOM NUMBERS BETWEEN 1-12 FOR EACH CRYSTAL
green = Math.floor(Math.random()*11+1)
yellow = Math.floor(Math.random()*11+1)
red = Math.floor(Math.random()*11+1)
blue = Math.floor(Math.random()*11+1)

//THESE ARE THE VARIABLES FOR MY COUNTERS
var totalScore= 0; 
var winsCounter= 0;
var lossesCounter= 0;

//USING JQUERY TO UPDATE HTML FILE VIA DOM
$('#numbWins').text(winsCounter);
$('#numbLosses').text(lossesCounter);


// FUNCTIONS GO IN BELOW
//NEED TO ADD FUNCTION TO RESET THE GAME 
//LOOK AT HANGMAN GAME FOR FUNCTION INSPIRATION 

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randNumb').text(Random);
    green= Math.floor(Math.random()*11+1);
    yellow= Math.floor(Math.random()*11+1);
    red= Math.floor(Math.random()*11+1);
    blue= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#playerScores').text(totalScore);
    } 

//ADDS WINS TO THE TOTAL SCORE 
function winner() {
    alert("You won!");
  winsCounter++; 
  $('#numbWins').text(winsCounter);
  reset();
}

//ADDS LOSSES TO THE TOTAL SCORE 
function loser () {
    alert ("You lose!");
      lossesCounter++;
      $('#numbLosses').text(lossesCounter);
      reset()
    }

//USING JQUERY WE MAKE THE CRYSTALS CLICKABLE 

  $('#green').on ('click', function(){
    totalScore = totalScore + green;
    console.log("Total Score= " + totalScore);
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

  $('#yellow').on ('click', function(){
    totalScore = totalScore + yellow;
    console.log("Total Score= " + totalScore);
    $('#playerScores').text(totalScore); 
        if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  