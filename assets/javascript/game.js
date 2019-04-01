// THE BEGINNING OF MY jQUERY CRYSTALS ASIGNMENT CODE

//THIS IS CRUCIAL! THIS IS WHAT GETS OUR JQUERY TO WORK
$( document ).ready(function(){

    //SELECTS A RANDOM NUMBER TO BE MATCHED
    //THE NUMBER TO BE REACHED MUST BE BETWEEN 19 AND 120
    // THIS IS WHERE MOE HELPED ME FIGURE OUT THE CODE BUT I COULDNT REMEMBER WHY HE SAID WE MUST ADD 1- REFER TO PHOTO FROM CLASS 
    var Random=Math.floor(Math.random()*101+19)
    
//APPENDING
//DISPLAYING (APPENDING) RANDOM NUMBER TO BE MATCHED IN THE #randNum SECTION IN HTML FILE VIA DYNAMIC 
$('#randNumb').text(Random);


// CREATING VARIABLES AND RANDOM NUMBERS BETWEEN 1-12 FOR EACH CRYSTAL
//GOOGLED THIS CODE, IT IS DRY CODING BUT I COULDNT FIGURE OUT HOW TO GIVE EACH CRYSTAL THEIR OWN UNIQUE VALUE WITHOUT DOING SO 
// THE IN CLASS ACTIVITY GAVE US SET NUMBERS IN AN ARRAY TO CHOOSE FROM. THIS IS THE CODE I FOUND TO GIVE ALL CRYSTALS A RANDOM VALUE WITHOUT A SET ARRAY
green = Math.floor(Math.random()*11+1)
yellow = Math.floor(Math.random()*11+1)
red = Math.floor(Math.random()*11+1)
blue = Math.floor(Math.random()*11+1)

//THESE ARE THE VARIABLES FOR MY COUNTERS MUCH LIKE THE ONES IN HANGMAN 
var totalScore= 0; 
var winsCounter= 0;
var lossesCounter= 0;
//USING JQUERY TO UPDATE COUNTERS IN HTML FILE VIA DYNAMIC NODE 
$('#numbWins').text(winsCounter);
$('#numbLosses').text(lossesCounter);


// FUNCTIONS GO IN BELOW
//NEED TO ADD FUNCTION TO RESET THE GAME VIDEO DOES AT END 
//LOOK AT HANGMAN GAME FOR FUNCTION INSPIRATION 

function resetGame (){
    // WILL RESET ALL VARIABLES AND UPDATE MY TOTAL SCORE SECTION IN HTML FILE 
    Random=Math.floor(Math.random()*101+19);
    $('#randNumb').text(Random);
    green= Math.floor(Math.random()*11+1);
    yellow= Math.floor(Math.random()*11+1);
    red= Math.floor(Math.random()*11+1);
    blue= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#playerScores').text(totalScore);
    } 

// THIS FUNCTION ADDS WINS TO THE WINS COUNTER IF PLAYER WINS
//UPDATES WINS IN  HTML FILE VIA DYNAMIC NODE 
// EVOKING RESETGAME FUNCTION 
function winner() {
    alert("You won!");
  winsCounter++; 
  $('#numbWins').text(winsCounter);
  resetGame();
}

//ADDS LOSSES TO THE LOSSES COUNTER IF PLAYER LOSES 
//UPDATES LOSSES IN HTML FILE VIA DYNAMIC NODE 
//EVOKING RESETGAME FUNCTION 
function loser () {
    alert ("You lose!");
      lossesCounter++;
      $('#numbLosses').text(lossesCounter);
      resetGame()
    }

//USING JQUERY WE MAKE THE CRYSTALS CLICKABLE BY ADDING EVENT LISTENERS 
//Creating multiple crystals each with their own unique number value.
//COULDNT FIGURE IT OUT HOW TO DO IT IN ONE CODE LIKE THE INCLASS ACTIVITY(HTML12) , I WENT WITH A YOUTUBE TUTORIAL


//CLICK EVENT FOR GREEN CRYSTAL AND UPDATING TOTAL SCORE SECTION IN HTML FILE WHEN THE GREEN CRYSTAL IS CLICKED 
  $('#green').on ('click', function(){

  //total score will equal the total score plus the value of green crystal
    totalScore = totalScore + green;
    $('#playerScores').text(totalScore); 
//SETTING UP CONDITIONALS FOR WINS and LOSSES 
//IT WILL EXECUTE WINNER FUNCTION FIRST IF TOTAL SCORE EQUALS RANDOM // EVOKING FUNCTIONS 
 if (totalScore === Random){
          winner();
        }
else if (totalScore > Random){
          loser();
        }   
  })

// THE EVENT FOR YELLOW CRYSTAL AND UPDATING TOTAL SCORE SECTION IN HTML FILE WHEN THE YELLOW CRYSTAL IS CLICKED 
  $('#yellow').on ('click', function(){
      //total score will equal the total score plus the value of yellow crystal
    totalScore = totalScore + yellow;
    $('#playerScores').text(totalScore); // DYNAMICALLY UPDATES THE PLAYERS TOTAL SCORE IN HTML FILE 
// SETTING UP CONDITIONALS FOR WINS AND LOSSES // EVOKING FUNCTIONS 
        if (totalScore === Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  


//THE EVENT FOR THE RED CRYSTAL AND UPDATING TOTAL SCORE SECTION IN HTML FILE WHEN THE RED CRYSTAL IS CLICKED 
  $('#red').on ('click', function(){
      //total score will equal the total score plus the value of red crystal
    totalScore = totalScore + red;
    $('#playerScores').text(totalScore);
//SETTING UP CONDITIONALS FOR WINS AND LOSSES // EVOKING FUNCTIONS 
          if (totalScore === Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  


  // THE EVENT FOR THE BLUE CRYSTAL AND UPDATING TOTAL SCORE SECTION IN HTML FILE WHEN THE BLUE CRYSTAL IS CLICKED 
  $('#blue').on ('click', function(){
      //total score will equal the total score plus the value of blue crystal
    totalScore = totalScore + blue;
    $('#playerScores').text(totalScore);
//SETTING UP CONDITIONALS FOR WINS AND LOSSES // EVOKING FUNCTIONS 
          if (totalScore === Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  });

});