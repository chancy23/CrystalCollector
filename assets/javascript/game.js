
$(document).ready(function() {
    
    //object for the gems and values
    var gems = {
        blue: {
            value: 0
        },
        green: {
            value: 0
        },
        orange: {
            value: 0
        },
        purple: {
            value: 0
        },
    };
    
    //variables
    var target = 0
    var counter = 0;
    var wins = 0;
    var losses = 0;
    
    //functions====================================================================

    // function to randomly select number from min, max parameters
    function generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    //function to start game, get random number on page, and assign gem values (moved from separate functions)
    function startGame() {
        
        //resets counter
        counter = 0;
        $("#counter").text(counter);
        
        //sets target number from randomnumber function
        target = generateRandom(19, 120);
        $("#randomNumber").text(target);
        console.log("this is the target number: " + target);
        
        //gives each gem a random value
        gems.blue.value = generateRandom(1, 12);
        gems.green.value = generateRandom(1, 12);
        gems.orange.value = generateRandom(1, 12);
        gems.purple.value = generateRandom(1, 12);

        console.log("this is blue value: " + gems.blue.value);
        console.log("this is green value: " + gems.green.value);
        console.log("this is orange value: " + gems.orange.value);
        console.log("this is purple value: " + gems.purple.value);
    };

    function assignGemValue(gems) {
        counter += gems.value;
        $("#counter").text(counter);
        winOrLoss();
    };

    //function to determine if a win or loss and to invoke new game function
    function winOrLoss() {
        if (counter === target) {
            $("#wins").text(wins +1);
            startGame();
        }
        else if (counter > target) {
            $("#losses").text(losses +1);
            startGame();
        };
    };

    // //main processes/game play ===============================================================

    startGame();

    //on a click to each gem and add to counter and call win or loss function to determine score
    $("#blue").on("click", function() {
        assignGemValue(gems.blue);
    });

    $("#green").on("click", function() {
        assignGemValue(gems.green);
    });

    $("#orange").on("click", function() {
        assignGemValue(gems.orange);
    });

    $("#purple").on("click", function() {
        assignGemValue(gems.purple);
    });
    

    
});