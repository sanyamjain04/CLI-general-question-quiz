var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name ? : ");

console.log("Welcome " + userName);
console.log("Welcome to the Quiz, This Quiz contains some common question about our Country India. Let's Play! ");
console.log("please enter all your answers in lowercase")


var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log('You are Right!');
    score++;
  } else {
    console.log('You are Wrong!');

  }
  console.log("Your Current score = " + score);
  console.log('----------')

}


var questions = [
  {
    question: "Which city is the capital city of India? ",
    answer: "new delhi"
  },
  {
    question: "Which city is known as pink city of India? ",
    answer: "jaipur"
  },
  {
    question: "Which city is know as financial capital of India? ",
    answer: "mumbai"
  },
  {
    question: " What is the capital of Uttar Pradesh? ",
    answer: "lucknow"
  },
  {
    question: " What is the capital of Bihar? ",
    answer: "patna"
  },
]



for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);


}

console.log('congratulation you completed the quiz. Your score is = ' + score);