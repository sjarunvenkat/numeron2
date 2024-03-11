// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
const playbutton = document.getElementById("play-button");

playbutton.onclick = () => {
  location.href = "./game.html";
};
