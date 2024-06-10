//prendo gli elementi html che mi servono
const playButton = document.getElementById("playButton");
const pcScoreInner = document.getElementById("pcScore");
const userScoreInner = document.getElementById("userScore");
const result = document.getElementById("result");
//creo un evento sul bottone per giocare
playButton.addEventListener("click", function () {
  //genero dei numeri casuali da 1 a 6 per il pc
  let pcScore = Math.floor(Math.random() * 6) + 1;
  console.log("Pc Score:", pcScore);
  //genero dei numeri casuali da 1 a 6 per l'user
  let userScore = Math.floor(Math.random() * 6) + 1;
  console.log("User score:", userScore);
  // creo le condizioni dove
  if (userScore > pcScore) {
    //se il punteggio dell'user è maggiore del punteggio del pc vince user
    console.log("You win!!!");
    result.textContent = "YOU WIN!!!";
  } else if (userScore < pcScore) {
    //se il punteggio dell'pc è maggiore del punteggio del user vince pc
    console.log("You lose!!!");
    result.textContent = "YOU LOSE!!!";
  } else {
    //altrimenti parità
    console.log("YOU DREW!!!");
    result.textContent = "YOU DREW!!!";
  }

  //scrivo il risultato pc in html
  pcScoreInner.innerHTML = "PC SCORE: " + pcScore;
  //scrivo il risultao user sull html
  userScoreInner.innerHTML = "USER SCORE: " + userScore;
  //scrivo il risultato nell html
});
