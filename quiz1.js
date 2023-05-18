const questions=[
    {
        question: "A queue follows ________?",
        answers: [
            {text: "LIFO Principle", correct: false},
            {text: "FIFO Principle", correct: true},
            {text: "Linear Tree", correct: false},
            {text: "Ordered Array", correct: false},
        ]
    },
    {
        question: "Which data structure do we use for testing a palindrome?",
        answers: [
            {text: "Heap", correct: false},
            {text: "Tree", correct: false},
            {text: "Priority Queue", correct: false},
            {text: "Stack", correct: true},
        ]
    },
    {
        question: "The time complexity used for inserting a node in a priority queue on the basis of key is:",
        answers: [
            {text: "O(n)", correct: true},
            {text: "O(n2)", correct: false},
            {text: "O(nlogn)", correct: false},
            {text: "O(logn)", correct: false},
        ]
    },
    {
        question: " We can use a self–balancing binary search tree for implementing the:",
        answers: [
            {text: "Hash Table", correct: false},
            {text: "Priority Queue", correct: true},
            {text: "Heap Sort and Priority Queue", correct: false},
            {text: "Heap Sort", correct: false},
        ]
    },
    {
        question: "The tango tree is a type of:",
        answers: [
            {text: "Binary Search Tree", correct: true},
            {text: "K-ary Tree", correct: false},
            {text: "Ternary Tree", correct: false},
            {text: "AVL Tree", correct: false},
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();