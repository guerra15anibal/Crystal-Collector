$(document).ready(function () {
    Start()
    
})
//Variables
var randNum = Math.floor(Math.random() * 100) + 1;

function Start() {
    $(".randNum").text(randNum);
    console.log(randNum)
}



var Win = 0;


var Lose = 0;


var Score = 0;


var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;

function Wins() {
    alert("YOU WON!")
    Win++
    $(".Win").text(Win);
    Score = 0;
    $(".Score").text(Score);
    reset();
    resetOne();
}

function Losses() {
    alert("YOU LOST!")
    Lose++
    $(".Losses").text(Lose);
    Score = 0;
    $(".Score").text(Score);
    reset();
    resetOne();
}

function myClick1() {
    Score = Score + crystalOne;
    $(".Score").text(Score);
    console.log(crystalOne);
    if (Score === randNum) {
        Wins();
        reset();

    } else if (Score > randNum) {
        Losses();
        reset();
    }

}
function myClick2() {
    Score = Score + crystalTwo;
    $(".Score").text(Score);
    console.log(crystalTwo);
    if (Score === randNum) {
        Wins();
        reset();
    } else if (Score > randNum) {
        Losses();
        reset();
    }

}

function myClick3() {
    Score = Score + crystalThree;
    $(".Score").text(Score);
    console.log(crystalThree);
    if (Score === randNum) {
        Wins();
        reset();

    } else if (Score > randNum) {
        Losses();
        reset();
    }

}

function myClick4() {
    Score = Score + crystalFour;
    $(".Score").text(Score);
    console.log(crystalFour);
    if (Score === randNum) {
        Wins();
        reset();

    } else if (Score > randNum) {
        Losses();
        reset();
    }

}


function reset() {
    randNum = Math.floor(Math.random() * 100) + 15;
    $(".randNum").text(randNum);
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
}

