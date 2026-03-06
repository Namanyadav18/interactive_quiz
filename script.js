const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "High Text Machine Language"],
        answer: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "JavaScript"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const quizEl = document.getElementById("quiz");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
    questionEl.textContent = questions[currentQuestion].question;
    optionsEl.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
}

nextBtn.onclick = () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizEl.style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = "Your Score: " + score;

    if (score === questions.length) {
        messageEl.textContent = "Excellent!";
    } else {
        messageEl.textContent = "Try Again!";
    }
}

restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    resultEl.style.display = "none";
    quizEl.style.display = "block";
    showQuestion();
};

showQuestion();
