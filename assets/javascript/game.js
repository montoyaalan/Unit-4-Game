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


// CREATING VARIABLES AND RANDOM NUMBERS BETWEEN 1-12 FOR THE CRYSTALS 
var green= Math.floor(Math.random()*11+1)
var yellow= Math.floor(Math.random()*11+1)
var red= Math.floor(Math.random()*11+1)
var blue= Math.floor(Math.random()*11+1)

//THESE ARE THE VARIABLES FOR MY COUNTERS
var totalScore= 0; 
var winsCounter= 0;
var lossesCounter= 0;

//USING JQUERY TO UPDATE HTML FILE VIA DOM
$('#numberWins').text(winsCounter);
$('#numberLosses').text(lossesCounter);