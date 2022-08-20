const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
const correct = chalk.bgGreenBright.black;
const wrong = chalk.bgRed.black;
const skip = chalk.bgCyanBright.black;

const userName = readlineSync.question("What's your name ? : ");

log(chalk.bold.bgRedBright.green(" Welcome " + userName + " "));
log("Welcome to the Quiz, This Quiz contains some common question about General Knowledge. Let's Play! ");



let score = 0;

const play = (question, answer, options) => {
  const userAnswer = readlineSync.keyInSelect(options, question);;

  if (userAnswer === answer) {
    log(correct(' You are Right! '));
    score++;
  } else if (userAnswer == -1) {
    log(skip(" You Skip this Question "))
  }
  else {
    log(wrong(' You are Wrong! '));
  }
  log("Your Current score = " + score);
  log('----------')

}


const questions = [
  {
    question: "What country has the highest life expectancy? ",
    options: ["Hong kong", "Norway", "Germany", "Sweden"],
    answer: 0
  },
  {
    question: "How many elements are in the periodic table? ",
    options: [93, 115, 118, 153],
    answer: 2
  },
  {
    question: "What phone company produced the 3310?  ",
    options: ["nokia", "Blackberry", "lenevo", "Micromax"],
    answer: 0
  },
  {
    question: "What planet is closest to the sun?  ",
    options: ["Pluto", "Mars", "Venus", "Mercury"],

    answer: 3
  },
  {
    question: "What is the only flag that does not have four sides?",
    options: ["Venezuela", "Bhutan", "Nepal", "North Korea"],
    answer: 2
  },
]


for (let i = 0; i < questions.length; i++) {
  const currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options);
}


log(chalk.bold.bgGrey(' Congratulation you completed the Quiz. Your score is = ' + score + " "));

log("--- Quiz End ---");
