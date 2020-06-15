const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const quizQuestionElement = document.getElementById("code-quiz")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const nextQuestionElement = document.getElementById("next-question")
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
startButton.addEventListener("click", pad)
answerButtonsElement.addEventListener("click", () => {
    currentQuestionIndex++
    
})

function startGame() {
    
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizQuestionElement.classList.add('hide')
    setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questions) {
    console.log(questions)
    questionElement.innerText = questions.question
    questions.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            button.addEventListener("click", setNextQuestion)

        }
        else {
            sec - 10
            
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    nextQuestionElement.classList.remove("hide")
}

function resetState () {
    nextButton.classList.add("hide")
    startButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add("correct")
    } else {
      element.classList.add("wrong")
    }
  }
  
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
  }

const questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: [
            { text: "Javascript", correct: false },
            { text: "terminal/bash", correct: true },
            { text: "for loops", correct: false },
            { text: "console.log", correct: false }
        ]
    },
    {
        question: "Arrays in Javascript can be used to store ________:",
        answer: [
            { text: "numbers and strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "all of the above", correct: true }
        ]
    },
    {
        question: "Commonly used data types DO NOT include ________:",
        answer: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: false },
            { text: "numbers", correct: true }
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with ______:",
        answer: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "square brackets", correct: false },
            { text: "parenthesis", correct: true }
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answer: [
            { text: "commas", correct: false },
            { text: "curely brackets", correct: false },
            { text: "parenthesis", correct: false },
            { text: "quotes", correct: true }
        ]
    }
]



var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);


var score = 0;
var highscore = localStorage.getItem("highscore");
function highScore(score) {
    if(highscore !== null){
        if (score > highscore) {
            localStorage.setItem("highscore", score);      
        }
    }
    else{
        localStorage.setItem("highscore", score);
    }
}