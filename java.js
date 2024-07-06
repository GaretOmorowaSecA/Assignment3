/* script.js */
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correct: 0
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      question: "What is the capital of Germany?",
      options: ["Vienna", "Berlin", "Rome", "Amsterdam"],
      correct: 1
    },
    {
      question: "What is the capital of Spain?",
      options: ["Lisbon", "Madrid", "Barcelona", "Seville"],
      correct: 1
    },
    {
      question: "Which game features a character named Link?",
      options: ["The Legend of Zelda", "Super Mario", "Metroid", "Final Fantasy"],
      correct: 0
    },
    {
      question: "In which game do you collect and trade Pokémon?",
      options: ["Animal Crossing", "Pokémon", "Mario Kart", "Zelda"],
      correct: 1
    },
    {
      question: "Which game series features the Umbrella Corporation?",
      options: ["Resident Evil", "Silent Hill", "Call of Duty", "Half-Life"],
      correct: 0
    },
    {
      question: "What is the name of the main character in the Halo series?",
      options: ["Master Chief", "Doomguy", "Solid Snake", "Gordon Freeman"],
      correct: 0
    },
    {
      question: "Which game series includes a popular battle royale mode called Warzone?",
      options: ["Call of Duty", "Battlefield", "Fortnite", "PUBG"],
      correct: 0
    },
    {
      question: "In which game would you find the character Lara Croft?",
      options: ["Tomb Raider", "Uncharted", "Assassin's Creed", "The Last of Us"],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.querySelectorAll('.option');
    const question = questions[currentQuestionIndex];
  
    questionElement.textContent = question.question;
    optionsElement.forEach((option, index) => {
      option.textContent = question.options[index];
      option.classList.remove('correct', 'incorrect');
    });
  
    document.getElementById('next-button').style.display = 'none';
  }
  
  function selectOption(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const optionsElement = document.querySelectorAll('.option');
  
    if (selectedIndex === question.correct) {
      optionsElement[selectedIndex].classList.add('correct');
      score++;
    } else {
      optionsElement[selectedIndex].classList.add('incorrect');
      optionsElement[question.correct].classList.add('correct');
    }
  
    document.getElementById('next-button').style.display = 'block';
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById('quiz-container').innerHTML = `
      <div id="result-container">
        <h2>Your Score: <span id="score">${score}</span>/${questions.length}</h2>
      </div>
    `;
  }
  
  document.addEventListener('DOMContentLoaded', loadQuestion);
  