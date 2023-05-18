const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "A. Hyperlinks and Text Markup Language", correct: false },
        { text: "B. Hypertext Markup Language", correct: true },
        { text: "C. Home Tool Markup Language", correct: false },
        { text: "D. Hyper Text Multiple Language", correct: false }
      ]
    },
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      answers: [
        { text: "A. &lt;link&gt;", correct: false },
        { text: "B. &lt;a&gt;", correct: true },
        { text: "C. &lt;p&gt;", correct: false },
        { text: "D. &lt;div&gt;", correct: false }
      ]
    },
    {
      question: "Which tag is used to define a table in HTML?",
      answers: [
        { text: "A. &lt;table&gt;", correct: true },
        { text: "B. &lt;ul&gt;", correct: false },
        { text: "C. &lt;form&gt;", correct: false },
        { text: "D. &lt;section&gt;", correct: false }
      ]
    },
    {
      question: "What is the correct way to insert an image in HTML?",
      answers: [
        { text: "A. &lt;image src='image.jpg'&gt;", correct: false },
        { text: "B. &lt;img src='image.jpg'&gt;", correct: true },
        { text: "C. &lt;img&gt;image.jpg&lt;/img&gt;", correct: false },
        { text: "D. &lt;img href='image.jpg'&gt;", correct: false }
      ]
    },
    {
      question: "Which tag is used to define the header of a document or a section in HTML?",
      answers: [
        { text: "A. &lt;header&gt;", correct: true },
        { text: "B. &lt;h1&gt;", correct: false },
        { text: "C. &lt;nav&gt;", correct: false },
        { text: "D. &lt;title&gt;", correct: false }
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