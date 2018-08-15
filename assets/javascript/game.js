//need array to hold random generated number
var numbersToPick = [19, 20, 25, 37, 28, 30, 45, 46, 48, 50, 51, 53, 54, 56, 60, 62, 65, 66, 67, 70, 75, 79, 83, 89, 91, 92, 94, 95, 100, 104, 105, 109, 110, 114, 115, 117, 19, 120];

//need to randomly select a number to put in array
var randomNumber = numbersToPick[Math.floor(Math.random() * numbersToPick.length)];
    //console.log("random number is: " + randomNumber);

//variable for counting each click value
var counter = 0;

//need variables for wins and losses
var wins = 0;
var losses = 0;


//need array to hold crystal values to assign to each gem image
var gemPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//need to assign a random value to gemstone
function assignRandomValue(){
    var randomValue = gemPossibleValues[Math.floor(Math.random() * gemPossibleValues.length)];
        console.log("gem value is: " + randomValue);
};

//array of gem image files
var gemImages = [".//assets/images/blue_gemstone.png", ".//assets/images/purple_gemstone1.png", ".//assets/images/green_gemstone.png", ".//assets/images/orange_gemstone.png"];

$("#gems").on("click", function(){
    alert("clicked in gems div")
});
//load gems to page and assign a random value to each....

// for (var i = 0; i < gemImages.length; i++) {
//     var imageGem = $("<img>");
//     imageGem.addClass("gemImage");
//     imageGem.attr("src", gemImages[i]);
//     imageGem.attr("data-gemvalue", assignRandomValue());
//     $("#gems").append(imageGem);
//     console.log(imageGem);
// };

// $(".gemImage").on("click", function() {
//     //var gemValue = 5;
//     var gemValue = ($(this).attr("data-gemvalue"));
//     gemValue = parseInt(gemValue);
//     console.log("this is the value of the gem clicked: " + gemValue);
//     counter += gemValue;
//     $("#userTotal").text(counter);
// });


//need to randomize gem value each new game

//need to reset game on a win or loss +1, pick new number, and reset guessed amount array
function resetGame(){
    wins = 0;
    losses = 0;
    randomNumber;
    assignRandomValue();
};

//need to make each gem click add to guessed amount array

//empty array to capture each gem clicked on amount
var guessTotal = [];
$("#guessTotal").text(guessTotal);

$(document).ready(function() {
    //displays random number to match to on page in a card
    $("#randomNumber").text(randomNumber);
        console.log("Number to Match box: " + randomNumber);

    //gemImageLoad();

    
    //adding the gem to the html page (will assign a random value to each gem variable)
        //blue gem
       //var imageGem = $("<img>");

    // Each imageCrystal will be given a src link to the crystal image
    //imageGem.attr("src", ".//assets/images/blue_gemstone.png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    //imageGem.attr("data-gemvalue", assignRandomValue());

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    //$("#blueGem").append(imageGem);

        //orange gem

        //purple gem

        //green gem

//calling function to assign the random number to each gem:
    //assignRandomValue();
    //assignRandomValue();
    //assignRandomValue();

});