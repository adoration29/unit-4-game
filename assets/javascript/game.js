

//Assigning variables//
var crystalBlueOne
var crystalPurpleTwo
var crystalTealThree
var crystalRedFour
var win
var loss
var randomNumberSet = 19-120
var crystal = 1-12
var totalScore 
//Showing RandomNumber at the start of the game
$(document).ready (function(){
    var Random=Math.floor((Math.random()* 101) +19 );

}
$('#randomNumberSet').text(Random);

//Giving Random number for each of the crystal which is 1-12
var crystalBlueOne= Math.floor((Math.random() *11) +1 );
var crystalPurpleTwo =  Math.floor((Math.random() *11)+1 );
var crystalTealThree =  Math.floor((Math.random() *11)+1 );
var crystalRedFour =  Math.floor((Math.random() *11)+1 );

var win =0;
var loss = 0;
var totalScore =0;

$('#Win').text(win);
$('#Loss').text(loss);

// Here the game resets

function reset(){
    Random=Math.floor((Math.random()*101)+19);
    console.log(Random)
    
    $("#randomNumberSet").text(Random);
    crystalBlueOne= Math.floor((Math.random()*11) +1);
    crystalPurpleTwo= Math.floor((Math.random()*11) +1);
    crystalTealThree= Math.floor((Math.random()*11) +1);
    crystalRedFour= Math.floor((Math.random()*11) +1);
    totalScore= 0;
    $("#totalScore").text(totalScore);

    } 
    if(totalScore === randomNumberSet){
        win++;
        document.querySelector("#win").innerHTML = win;

        //game is reset
        reset();
        }
    

    if (totalScore > randomNumberSet){
        loss++;

        document.querySelector("#loss").innerHTML = loss;
    // we then reset.
    reset();
    
    }


