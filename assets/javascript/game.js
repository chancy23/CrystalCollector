
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
    
    var target = 0
    var counter = 0;
    var wins = 1;
    var losses = 1;
    
    //functions====================================================================
    // Helper function to randomly select number from min, max parameters to assign to gem value and to target value
    function generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function startGame() {
        counter = 0;
        $("#counter").text(counter);
        
        //sets target number from randomnumber function
        target = generateRandom(19, 120);
        $("#randomNumber").text(target);

        //gives each gem a random value
        gems.blue.value = generateRandom(1, 12);
        gems.green.value = generateRandom(1, 12);
        gems.orange.value = generateRandom(1, 12);
        gems.purple.value = generateRandom(1, 12);

        //Testing section
        //console.log("this is the target number: " + target);
        // console.log("this is blue value: " + gems.blue.value);
        // console.log("this is green value: " + gems.green.value);
        // console.log("this is orange value: " + gems.orange.value);
        // console.log("this is purple value: " + gems.purple.value);
    };

    //Assign gem value and when called increase the counter by that amounta and then calls the win/loss function 
    function assignGemValue(gems) {
        counter += gems.value;
        $("#counter").text(counter);
        winOrLoss();
    };

    function winOrLoss() {
        if (counter === target) {
            $("#wins").text(wins ++);
            startGame();
        }
        else if (counter > target) {
            $("#losses").text(losses ++);
            startGame();
        };
    };

    // //main processes/game play ===============================================================
    startGame();

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