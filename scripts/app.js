import { GetApi, cpuInput } from "./api.js";
import {
  createdHomeBtn,
  rockIcon,
  paperIcon,
  scissorIcon,
  lizardIcon,
  spockIcon,
} from "./addingId.js";

CreatingBtns();
GetApi();
CreatingIcons();
clearRock();
let playerInput;
let winner;
let playerOneFinalScore = 0;
let roundOneChoice = 0;

function CreatingBtns() {
  createdHomeBtn.innerHTML = "";
  let button1 = document.createElement("button");
  button1.className = "btn btn-dark startBtn2 t6";
  button1.textContent = "Start";
  button1.addEventListener("click", function () {
    ThreeBtns();
    createdHomeBtn.removeChild(button1);
  });
  createdHomeBtn.appendChild(button1);
}

function ThreeBtns() {
  let button2 = document.createElement("button");
  button2.className = "btn btn-dark";
  button2.textContent = "Best out of 1";
  button2.addEventListener("click", function () {
    CreatingIcons();
    createdHomeBtn.removeChild(button2);
    createdHomeBtn.removeChild(button3);
    createdHomeBtn.removeChild(button4);
    createdHomeBtn.removeChild(button5);
  });
  createdHomeBtn.appendChild(button2);

  let button3 = document.createElement("button");
  button3.className = "btn btn-dark";
  button3.textContent = "Best out of 5";
  button3.addEventListener("click", () =>{
    CreatingIcons();
    createdHomeBtn.removeChild(button2);
    createdHomeBtn.removeChild(button3);
    createdHomeBtn.removeChild(button4);
    createdHomeBtn.removeChild(button5);
  })
  createdHomeBtn.appendChild(button3);

  let button4 = document.createElement("button");
  button4.className = "btn btn-dark";
  button4.textContent = "Best out of 7";
  button4.addEventListener("click", () => {
    CreatingIcons()
    createdHomeBtn.removeChild(button2);
    createdHomeBtn.removeChild(button3);
    createdHomeBtn.removeChild(button4);
    createdHomeBtn.removeChild(button5);
  })
  createdHomeBtn.appendChild(button4);

  let button5 = document.createElement("button");
  button5.className = "btn btn-dark";
  button5.textContent = "Player V Player";
  createdHomeBtn.appendChild(button5);
}

function CreatingIcons() {
  let rockBtn = document.createElement("button");
  rockBtn.className = "btn btn-dark t";
  rockBtn.textContent = "Rock";
  rockIcon.appendChild(rockBtn);
  rockBtn.addEventListener("click", function () {
    Player1Choice("Rock");
    createdHomeBtn.textContent = winner;
  });

  let paperBtn = document.createElement("button");
  paperBtn.className = "btn btn-dark t2";
  paperBtn.textContent = "Paper";
  paperIcon.appendChild(paperBtn);
  paperBtn.addEventListener("click", () => {
    Player1Choice("Paper");
    createdHomeBtn.textContent = winner;
  });

  let scissorBtn = document.createElement("button");
  scissorBtn.className = "btn btn-dark t3";
  scissorBtn.textContent = "Scissors";
  scissorIcon.appendChild(scissorBtn);
  scissorBtn.addEventListener("click", () => {
    Player1Choice("Scissors");
    createdHomeBtn.textContent = winner;
  });

  let lizardBtn = document.createElement("button");
  lizardBtn.className = "btn btn-dark t4";
  lizardBtn.textContent = "Lizard";
  lizardIcon.appendChild(lizardBtn);
  lizardBtn.addEventListener("click", () => {
    Player1Choice("Lizard");
    createdHomeBtn.textContent = winner;
  });

  let spockBtn = document.createElement("button");
  spockBtn.className = "btn btn-dark t5";
  spockBtn.textContent = "Spock";
  spockIcon.appendChild(spockBtn);
  spockBtn.addEventListener("click", () => {
    Player1Choice("Spock");
    createdHomeBtn.textContent = winner;
  });
}

function Player1Choice(playerRes) {
  playerInput = playerRes;
  GetApi();
  PlayerResult();
}

function PlayerResult() {
  if (
    (playerInput == "Rock" && cpuInput == "Scissors") ||
    (playerInput == "Rock" && cpuInput == "Lizard") ||
    (playerInput == "Paper" && cpuInput == "Spock") ||
    (playerInput == "Paper" && cpuInput == "Rock") ||
    (playerInput == "Scissors" && cpuInput == "Paper") ||
    (playerInput == "Scissors" && cpuInput == "Lizard") ||
    (playerInput == "Lizard" && cpuInput == "Spock") ||
    (playerInput == "Lizard" && cpuInput == "Paper") ||
    (playerInput == "Spock" && cpuInput == "Rock") ||
    (playerInput == "Spock" && cpuInput == "Scissors")
  ) {
    winner = "Player One Wins";
  } else if (playerInput == cpuInput) {
    winner = "TIE";
  } else {
    winner = "CPU WINS";
  }
}

// function rndCounter(){

// }


function clearRock() {
  rockIcon.innerHTML = "";
  paperIcon.innerHTML = "";
  scissorIcon.innerHTML = "";
  lizardIcon.innerHTML = "";
  spockIcon.innerHTML = "";
}
