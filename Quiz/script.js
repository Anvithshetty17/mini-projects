let currentQuiz = 0;
let score = 0;
let quiz_block = document.getElementById("quiz_block");
let AllOptions = document.querySelectorAll(".option");
let questionElement = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
];

function deselectAnswers() {
  AllOptions.forEach((option) => {
    option.checked = false;
  });
}

function getSelected() {
  let selected;
  AllOptions.forEach((option) => {
    if (option.checked) {
      selected = option.id;
    }
  });
  return selected;
}

function loadQuiz() {
  deselectAnswers();
  let currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

loadQuiz();

function CheckAnswer() {
  let selected = getSelected();
  if (selected) {
    if (selected === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz_block.innerHTML =
        "<h2>You answered " +
        score +
        "/" +
        quizData.length +
        " questions correctly</h2> <button onclick='history.go(0)'>Play Again</button>";
    }
  } else {
    alert("Please select an option");
  }
}

function ShowScore() {
  alert("Your Current Score : " + score);
}
