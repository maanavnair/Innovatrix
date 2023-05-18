const questions = [
    {
      question: "What is encapsulation in OOP?",
      answers: [
        { text: "A. The process of hiding the internal implementation details of an object.", correct: true },
        { text: "B. The process of creating multiple instances of an object.", correct: false },
        { text: "C. The process of breaking down an object into smaller parts.", correct: false },
        { text: "D. The process of inheriting properties from a parent object.", correct: false }
      ]
    },
    {
      question: "What is inheritance in OOP?",
      answers: [
        { text: "A. The process of hiding the internal implementation details of an object.", correct: false },
        { text: "B. The process of creating multiple instances of an object.", correct: false },
        { text: "C. The process of breaking down an object into smaller parts.", correct: false },
        { text: "D. The process of inheriting properties from a parent object.", correct: true }
      ]
    },
    {
      question: "What is polymorphism in OOP?",
      answers: [
        { text: "A. The process of hiding the internal implementation details of an object.", correct: false },
        { text: "B. The process of creating multiple instances of an object.", correct: false },
        { text: "C. The process of breaking down an object into smaller parts.", correct: false },
        { text: "D. The ability of an object to take on many forms.", correct: true }
      ]
    },
    {
      question: "What is abstraction in OOP?",
      answers: [
        { text: "A. The process of hiding the internal implementation details of an object.", correct: false },
        { text: "B. The process of creating multiple instances of an object.", correct: false },
        { text: "C. The process of breaking down an object into smaller parts.", correct: false },
        { text: "D. The process of simplifying complex reality by modeling classes.", correct: true }
      ]
    },
    {
      question: "What is a class in OOP?",
      answers: [
        { text: "A. The process of hiding the internal implementation details of an object.", correct: false },
        { text: "B. The process of creating multiple instances of an object.", correct: false },
        { text: "C. A blueprint for creating objects (instances) that define their properties and behaviors.", correct: true },
        { text: "D. The process of inheriting properties from a parent object.", correct: false }
      ]
    }
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