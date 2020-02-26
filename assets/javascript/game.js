// $(document).ready(function () {

    var randomNum = Math.floor(Math.random() * 100 + 14);
console.log(randomNum)
    $("#RandoNum").text(randomNum);

    var crystalOne = Math.floor(Math.random() * 12 + 1);
    console.log(crystalOne)
    var crystalTwo = Math.floor(Math.random() * 12 + 1);
    console.log(crystalTwo)
    var crystalThree = Math.floor(Math.random() * 12 + 1);
    console.log(crystalThree)
    var crystalFour = Math.floor(Math.random() * 12 + 1);
    console.log(crystalFour)

    var playerScore = 0;
    var wins = 0;
    var losses = 0;

    $("numWins").text(wins);
    $("numLosses").text(losses);

    function newGame () {
        randomNum = Math.floor(Math.random() * 12 + 1);
        console.log(randomNum);
        $("#newNum").text(randomNum);
        var num1 = Math.floor(Math.random() * 12 + 1);
        var num2 = Math.floor(Math.random() * 12 + 1);
        var num3 = Math.floor(Math.random() * 12 + 1);
        var num4 = Math.floor(Math.random() * 12 + 1);
        playerScore = 0;
        $("#Score").text(playerScore);
    }

    function wins(){
        wins++
        $("#win").text(wins);
        newGame();
    }

    function losses(){
        lose++
        $("#lose").text(losses);
        newGame();
    }

    

    
// })