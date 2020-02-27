//Variables
var randNum = Math.floor(Math.random() * 100) + 15;
console.log(randNum);

var Win = 0;


var Lose = 0;


var Score = 0;


var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;

function Wins() {
    Win++
    $(".Win").text(Win);
    resetTwo();
    resetOne();
}

function Losses() {
        Lose++
        $(".Losses").text(Lose);
        resetTwo();
        resetOne();
}

function myClick1() {
    Score = Score + crystalOne;
    $(".Score").text(Score);
    console.log(crystalOne);
    if (Score === randNum) {
        Wins();
        resetTwo();
        resetOne();

    }else if (Score > randNum){
        Losses();
        resetTwo();
        resetOne();
    }

}
function myClick2() {
    Score = Score + crystalTwo;
    $(".Score").text(Score);
    console.log(crystalTwo);
    if (Score === randNum) {
        Wins();
        resetTwo();
        resetOne();
    }else if (Score > randNum){
        Losses();
        resetTwo();
        resetOne();
    }

}

function myClick3() {
    Score = Score + crystalThree;
    $(".Score").text(Score);
    console.log(crystalThree);
    if (Score === randNum) {
        Wins();
        resetTwo();
        resetOne();

    }else if (Score > randNum){
        Losses();
        resetTwo();
        resetOne();
    }

}

function myClick4() {
    Score = Score + crystalFour;
    $(".Score").text(Score);
    console.log(crystalFour);
    if (Score === randNum) {
        Wins();
        resetTwo();
        resetOne();

    }else if (Score > randNum){
        Losses();
        resetTwo();
        resetOne();
    }

}


function resetOne() {
    Score = 0;
    $("Score").text(Score);
}

function resetTwo() {
    randNum = Math.floor(Math.random() * 100) + 15;
    console.log(randNum);
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
}