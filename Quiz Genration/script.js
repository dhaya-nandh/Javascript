let questions = [];
let currentIndex = 0;
let score = 0;

async function getready() {
  const Apiurl = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;

  try {
    const response = await fetch(Apiurl);
    const data = await response.json();
    questions = data.results;
    currentIndex = 0;
    score = 0;

    document.getElementById("startBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

    showQuestion();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function showQuestion() {
  const quizBox = document.getElementById("quizBox");
  const currentQ = questions[currentIndex];
  const correctAnswer = currentQ.correct_answer;

  // Combine correct and incorrect answers
  const answers = [...currentQ.incorrect_answers, correctAnswer];
  answers.sort(() => Math.random() - 0.5);

  quizBox.innerHTML = `
    <h3>${currentIndex + 1}. ${currentQ.question}</h3>
    <ul>
      ${answers.map(ans => `<li>${ans}</li>`).join('')}
    </ul>
  `;

  const options = quizBox.querySelectorAll("li");
  options.forEach(option => {
    option.addEventListener("click", () => {
      // Disable all options
      options.forEach(o => o.style.pointerEvents = "none");

      if (option.textContent === correctAnswer) {
        option.classList.add("correct");
        score++;
      } else {
        option.classList.add("wrong");
        // Highlight correct answer
        options.forEach(o => {
          if (o.textContent === correctAnswer) o.classList.add("correct");
        });
      }

      // Show next button after answering
      document.getElementById("nextBtn").style.display = "inline-block";
    });
  });
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    document.getElementById("nextBtn").style.display = "none";
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizBox = document.getElementById("quizBox");
  quizBox.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("startBtn").textContent = "Restart Quiz";
  document.getElementById("startBtn").style.display = "inline-block";
}
