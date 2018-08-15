
$(document).ready(function() {
    
    //variable for counting each click value
    var counter = 0;

    //need variables for wins and losses
    var wins = 0;
    var losses = 0;


    //all possible numbers
    var numbersToPick = [19, 20, 25, 37, 28, 30, 45, 46, 48, 50, 51, 53, 54, 56, 60, 62, 65, 66, 67, 70, 75, 79, 83, 89, 91, 92, 94, 95, 100, 104, 105, 109, 110, 114, 115, 117, 19, 120];

    //randomly selected number from array
    var randomNumber = numbersToPick[Math.floor(Math.random() * numbersToPick.length)];
        $("#randomNumber").text(randomNumber);
        console.log("Number to Match box: " + randomNumber);

    //need array to hold crystal values to assign to each gem image
    var gemPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    
    //need to reset game on a win or loss +1, pick new number, and reset guessed amount array
        // function resetGame(){
        //     randomNumber;
        //     assignRandomValue();
            //need to randomize gem value each new game
        // };

    var gemImages = [".//assets/images/blue_gemstone.png", ".//assets/images/purple_gemstone1.png", ".//assets/images/green_gemstone.png", ".//assets/images/orange_gemstone.png"];

    //need to grab each image file out of the array, display as an img element, and add a random value to it
    //assign the random value from the function to each gem (need to figure out how to not repeat numbers)
    for (var i = 0; i < gemImages.length; i++) {
        var randomValue = gemPossibleValues[Math.floor(Math.random() * gemPossibleValues.length)];
        var imageGem = $("<img>");
        imageGem.addClass("gemImage");
        imageGem.attr("src", gemImages[i]);
        imageGem.attr("data-gemvalue", randomValue);
        $("#gems").append(imageGem);
        console.log("gem value is: " + randomValue);
    };
    
    //on a click to each gem need to get value (randomnumber function assigned value) and add to counter
    $(".gemImage").on("click", function() {
        var gemValue = ($(this).attr("data-gemvalue"));
        gemValue = parseInt(gemValue);
        console.log("this is the value of the gem clicked: " + gemValue);
        counter += gemValue;
        $("#userTotal").text(counter);

        if (counter === randomNumber) {
            $("#wins").text(wins +1);
                //resetGame();
        }
            //if amount of userTotal is OVER gem value, its a loss
        else if (counter > randomNumber) {
            $("#losses").text(losses +1);
            //resetGame();
        };
    });

    //on win or loss +1, reset game to play again but keep scoreboard the same numbers.

});