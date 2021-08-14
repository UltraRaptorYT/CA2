/*
  Title: My Experience in Poly and My Career Prospect
  Name: Soh Hong Yu
  Admin No: P2100775
  Class: DAAA/FT/1A/01
*/

"use strict"; // Use Strict Mode of JavaScript

// Game Logic
var gameState = false; // Boolean Value for state of Game
var cactus = document.getElementById("cactus"); // Get Cactus Element from HTML File
var character = document.getElementById("character"); // Get Dinosaur Character Element from HTML File
var count = 0; // Count for scoring
//? Use Array
var scoreArr = []; // scoreArr to save current high score unless page is reload
var score = 0; // Score to be displayed

//? Use Functions
// When Page is started
function OnLoadGame() {
  cactus.style.display = "none"; // Hide Cactus Element
  document.getElementById("score").style.display = "none"; // Hide Score Element
}

// When Start Button/Retry Button is clicked
function start() {
  count = 0; // Reset count
  character.firstElementChild.setAttribute("src", "../Graphics/Home/Dino.gif"); // Make sure character is at running sprite
  cactus.style.display = "block"; // Show Cactus Element
  document.getElementById("score").style.display = "block"; // Show Score Element
  document.getElementById("StartGame").style.display = "none"; // Hide Button Element
  gameState = true; // StartGame true
}

// When user click on screen, jump function will be invoked
function jump() {
  // Checks if game is running
  //? Use Conditional Statements
  if (gameState) {
    // Checks if Character is already jumping
    if (character.classList.contains("animate")) {
      return; // Exits and do not run the adding jumping animation class to character
    }
    // Adds Jumping animation to Character
    character.classList.add("animate");
    // Links setTimeout function which is like a counter which removes the jump animation when the jump is over
    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  }
}

// Every 10ms it will asynchronously check if character is touching the cactus
var checkDead = setInterval(function () {
  // Make sure that game is running
  if (gameState) {
    // Check where the character is at (Which Height)
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    // Checks the Cactus left property value (Position of which the left corner of the cactus sprite is at)
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
    // Checks if character is touching the cactus
    if (cactusLeft < 50 && cactusLeft > -40 && characterTop >= 187) {
      // if true then stop game
      endGame();
    } else {
      // if false then
      document.getElementById("score").innerHTML = score; // Change Score HTML to score value
      count++; // Increment count
      score = Math.floor(count / 100); // Score is a increment of count every second
    }
  }
}, 10);

// When character is touching cactus
function endGame() {
  scoreArr.push(score); // Store score in Array
  gameState = false; // Stop Game
  cactus.style.display = "none"; // Hides Cactus
  character.firstElementChild.setAttribute("src", "../Graphics/Home/Dead.gif"); // Change Character to dead animation
  document.getElementById("score").style.display = "none"; // Hide Score element
  document.getElementById("StartGame").style.display = "block"; // Show Retry Button
  var highScore = scoreArr[0]; // For Loop to look for High Score
  //? Use of For Loops
  for (var i = 1; i < scoreArr.length; i++) {
    if (scoreArr[i] > highScore) {
      highScore = scoreArr[i];
    }
  }
  // Change StartGame info
  // Add Retry Button
  // Add Score and High Score
  document.getElementById("info").innerHTML = `
  <input
    type="button"
    value="Retry"
    onclick="start()"
    class="
      bg-primary
      p-2
      rounded-pill
      text-center text-white
      d-block
      mx-auto
      px-4
    "
  />
  <p id="finalScore" class="text-center m-0 display-4">Score ${score}<br/>High Score ${highScore}</p>`;
}
