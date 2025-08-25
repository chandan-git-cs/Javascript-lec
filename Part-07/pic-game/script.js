"use strict";  
//  strict mode on kr diya, taaki coding mistakes jaldi pakdi jayein  

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");  
const score0EL = document.querySelector("#score--0");    
const score1EL = document.getElementById("score--1");    
const diceEl = document.querySelector(".dice"); 
const btnNew = document.querySelector(".btn-new");       
const btnRoll = document.querySelector(".btn-roll");     
const btnHold = document.querySelector(".btn-hold");     
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

// global variables
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];   //  dono players ke total score reset
  currentScore = 0;  //  abhi chal raha turn ka score reset
  activePlayer = 0;  //  player 0 se game start hoga
  playing = true;    //  game start ho gya, abhi chal rha hai

  score0EL.textContent = 0;   //  player 0 ka total score 0 pe
  score1EL.textContent = 0;   //  player 1 ka total score 0 pe
  current0EL.textContent = 0; //  player 0 ka current score 0 pe
  current1EL.textContent = 0; //  player 1 ka current score 0 pe

  diceEl.classList.add("hidden");           //  dice image ko hide kr diya
  player0El.classList.remove("player--winner"); //  player 0 winner class hata di
  player1El.classList.remove("player--winner"); //  player 1 winner class hata di
  player0El.classList.add("player--active");    //  player 0 ko active bana diya
  player1El.classList.remove("player--active"); //  player 1 ko active se hata diya
};

init(); //  game ko reset/start krne ke liye init call

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //  abhi wala player ka current score 0 kar do
  activePlayer = activePlayer === 0 ? 1 : 0;  //  agar player 0 tha to ab player 1 ho jayega, warna ulta
  currentScore = 0;                           //  naye player ka current score reset
  player0El.classList.toggle("player--active"); //  active class toggle kro player 0 pe
  player1El.classList.toggle("player--active"); //  active class toggle kro player 1 pe
};

// Rolling dice
btnRoll.addEventListener("click", function () {
  if (playing) {  //  game chal rha hai to hi chalaye
    const dice = Math.trunc(Math.random() * 6) + 1;  // random number 1 se 6
    diceEl.classList.remove("hidden");               // dice show kro
    diceEl.src = `dice-${dice}.png`;                 // dice ki image badal do

    if (dice !== 1) {   //  agar dice 1 nahi aaya
      currentScore += dice; //  current score me add kro
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;   //  UI me update kro
    } else {
      switchPlayer();   //  agar dice 1 aaya to turn dusre player ko de do
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {   //  game chal rha hai
    scores[activePlayer] += currentScore;   //  current score ko total score me jod do
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; //  UI me update kro

    if (scores[activePlayer] >= 100) {      //  agar 100 ya usse jyada score ho gya
      playing = false;                      //  game khatam
      diceEl.classList.add("hidden");       //  dice ko hide kr do
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");   //  winner class add krdo
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active"); //  active class hata do
    } else {
      switchPlayer();   //  agar abhi 100 nahi hua to turn switch kro
    }
  }
});

btnNew.addEventListener("click", init); //  new game button pe click hote hi game reset ho jaye
