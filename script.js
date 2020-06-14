const startButton = document.getElementById("start-btn")
const quizQuestion = document.getElementById("code-quiz")


startButton.addEventListener("click", startGame)
startButton.addEventListener("click", pad)

function startGame() {
    console.log("Started")
    startButton.classList.add('hide')
    quizQuestion.classList.remove('hide')
    setNextQuestion()
}   


function nextQuestion () {

}

function selectAnswer () {

}

const questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: [
            { text: "javascript", correct: false },
            { text: "terminal/bash", correct: false },
            { text: "for loops", correct: true },
            { text: "console.log", correct: false }
        ]
    }
]



var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);


var score = 0;
var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}