const startButton = document.getElementById("start-btn")
const quizQuestionElement = document.getElementById("code-quiz")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
startButton.addEventListener("click", pad)

function startGame() {
    console.log("Started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizQuestionElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

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