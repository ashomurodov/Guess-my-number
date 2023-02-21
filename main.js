// variables
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const secretNumber = document.querySelector(".number");
const inputedValue = document.querySelector(".guess");

const messageForGamer = document.querySelector(".message");
const scoreGamer = document.querySelector(".score");
const highscoreGamer = document.querySelector(".highscore");

const bodyContent = document.querySelector("body");

let score = 20;
let highscore = 0;

let secretnumber = Math.trunc(Math.random() * 20) + 1;

const messageDisplay = (message) => {
  messageForGamer.textContent = message;
};

// ^ GAME LOGIC FUNCTION;
const checkBtnListener = () => {
  let inputedvalue = inputedValue.value;

  // * if gamer find secret number
  if (inputedvalue > 0) {
    if (inputedvalue == secretnumber && score > 1) {
      secretNumber.textContent = secretnumber;
      messageDisplay("Correct!");
      bodyContent.style.backgroundColor = "#60b347";
      secretNumber.style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        highscoreGamer.textContent = highscore;
      }
    }
    // ! IF GAMER CANT FIND SECRET NUMBER
    else if (score > 1) {
      inputedvalue < secretnumber
        ? messageDisplay("Up the number ⬆️")
        : messageDisplay("Down the number ⬇️");
      score--;
      scoreGamer.textContent = score;
    } else {
      messageDisplay(
        `You lost the game. Loser! 😒 Correct answer: ${secretnumber}`
      );
      scoreGamer.textContent = 0;
    }
  } else {
    messageDisplay("😡This is not a number😡");
  }
};

// & AGAIN BUTTON LOGIC;
const againBtnListener = () => {
  secretNumber.textContent = "?";
  messageDisplay("Start guessing...");
  bodyContent.style.backgroundColor = "#222";
  secretNumber.style.width = "15rem";
  inputedValue.value = "";
  scoreGamer.textContent = 20;
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
};

checkBtn.addEventListener("click", checkBtnListener);
againBtn.addEventListener("click", againBtnListener);
