var questions = [
  {
    title: "Who won the superbowl last year?",
    choices: ['packers', 'buccaneers', 'falcons', 'steelers'],
    answer: 'buccaneers'
  },
  {
    title: "how many legs does a dog have?",
    choices: ['4', '3', '1', '10'],
    answer: '4'
  },
  {
    title: "what city/state is the packers from?",
    choices: ['green-bay', 'florida', 'new-jersey', 'new-mexico'],
    answer: 'green-bay'
  }
];
var timeLeftContainer = document.getElementById('time-left-container');
var scoreBox = document.getElementById('score-box');
var scoreLeft = document.getElementById('score-left');
var startButton = document.getElementById('start-button');
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answer-buttons');
var timeleftDisplay = document.getElementById('time-left');

var score = 0;
var questionCounter = 0;
var setTimer;
var countDown = 60;

startButton.addEventListener('click', startQuiz);
scoreBox.classList.add('hidden');
timeLeftContainer.classList.add('hidden');

function startQuiz() {
  timeLeftContainer.classList.remove('hidden');
  startButton.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  setTimer = setInterval(alertFunc, 1000);

  const firstQuestion = questions[questionCounter]
  showQuestion(firstQuestion)
}

function alertFunc() {
  countDown--;
  timeleftDisplay.textContent = countDown;
  
  if (countDown === 0) {
    alert("game over!");
    clearInterval(setTimer);
  }
}

function showQuestion(question) {
  // question = {
  //   title:
  //   choices:
  //   answer:
  // }
  questionElement.textContent = question.title;
  answerElement.textContent = '';
 
  var choices = question.choices;
  
  for (var choiceIndex = 0; choiceIndex < choices.length; choiceIndex++) {
    var choiceButton = document.createElement('button');
    choiceButton.classList.add('btn');
    choiceButton.textContent = choices[choiceIndex];
    choiceButton.addEventListener('click', clickChoiceButton)
    
    answerElement.appendChild(choiceButton);
  }
}

function clickChoiceButton() {
  var selectedChoice = this.textContent
  var answerOfQuestion = questions[questionCounter].answer
  
  if (selectedChoice === answerOfQuestion) {
    alert('you\'re correct')
  } else {
    alert('you\'re wrong')
    countDown -= 10;
    timeleftDisplay.textContent = countdown;
  }
  
  questionCounter++;
  
  if (questionCounter < questions.length) {
    const question = questions[questionCounter]
  
    showQuestion(question)
  } else {
    endQuiz()
  }
}

function endQuiz() {
  score = countDown;
  clearInterval(setTimer);
  scoreLeft.textContent = score;
  questionContainer.classList.add('hidden')
  scoreBox.classList.remove('hidden');
}






