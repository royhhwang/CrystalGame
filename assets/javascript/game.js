$(document).ready(function () {
    var compGuess = 0;
    
    var userGuess = 0;
    var guessTotValue = 0;
    var userWin = 0;
    var compWin = 0;


    var compGuess = Math.floor(Math.random() * 70 + 50);
    $("#comp-guess").html(compGuess);

    var gbValue = Math.floor(Math.random() * 3 + 1);
    console.log(gbValue);

    var wbValue = Math.floor(Math.random() * 4 + 3);
    console.log(wbValue);

    var pbValue = Math.floor(Math.random() * 10 + 10);
    console.log(pbValue);

    var dbValue = Math.floor(Math.random() * 5 + 5);
    console.log(dbValue);


    $(document).ready(function () {

        $("#greenButt").click(function () {
            guessTotValue = guessTotValue + gbValue;
            $("#user-guess").html(guessTotValue);
            if (guessTotValue == compGuess) {
                userWin++;
                alert("You win!");
                $(".colWin").html("Win " + userWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
            if (guessTotValue > compGuess) {
                compWin++;
                alert("You lose!");
                $(".colLose").html("Lose " + compWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
        });

        $("#purpleButt").click(function () {
            guessTotValue = guessTotValue + pbValue;
            $("#user-guess").html(guessTotValue);
            if (guessTotValue == compGuess) {
                userWin++;
                alert("You win!");
                $(".colWin").html("Win " + userWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
            if (guessTotValue > compGuess) {
                compWin++;
                alert("You lose!");
                $(".colLose").html("Lose " + compWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
        });

        $("#whiteButt").click(function () {
            guessTotValue = guessTotValue + wbValue;
            $("#user-guess").html(guessTotValue);
            if (guessTotValue == compGuess) {
                userWin++;
                alert("You win!");
                $(".colWin").html("Win " + userWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
            if (guessTotValue > compGuess) {
                compWin++;
                alert("You lose!");
                $(".colLose").html("Lose " + compWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
        });

        $("#diamondButt").click(function () {
            guessTotValue = guessTotValue + dbValue;
            $("#user-guess").html(guessTotValue);
            if (guessTotValue == compGuess) {
                userWin++;
                alert("You win!");
                $(".colWin").html("Win " + userWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
            if (guessTotValue > compGuess) {
                compWin++;
                alert("You lose!");
                $(".colLose").html("Lose " + compWin);
                guessTotValue = 0;
                $("#user-guess").html(guessTotValue);
            }
        });
        $(".colReset").click(function () {
            userWin = 0;
            compWin = 0;
            $(".colWin").html("Win " + userWin);
            $(".colLose").html("Lose " + compWin);
        });
    });
});
