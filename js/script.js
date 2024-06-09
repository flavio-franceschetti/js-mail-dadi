// ESERCIZIO DELLA MAIL

//recupero la mmia lista delle email
const mailList = [
  "luca.rossi123@finto.it",
  "giulia.marchi456@finto.it",
  "marco.bianchi789@finto.it",
  "alice.verdi1011@finto.it",
  "francesca.neri1213@finto.it",
  "giovanni.gialli1415@finto.it",
  "maria.blu1617@finto.it",
  "lorenzo.rossi1819@finto.it",
  "sara.azzurri2021@finto.it",
  "matteo.marroni2223@finto.it",
];
console.log(mailList);

//recupero l'input per l'inserimento dell'email
const userEmail = document.getElementById("email");
console.log(userEmail);
//recupero dello span failed in caso l'email non fosse nella lista
let failed = document.getElementById("failed");
console.log(failed);
//recupero dello span success in caso l'email sia nella lista
let success = document.getElementById("success");
console.log(success);

//recupero del check button dall'html
const checkButton = document.getElementById("checkButton");
//creo un evento sul check button dove al click cerco l'email nell'array
checkButton.addEventListener("click", function () {
  let userEmailValue = userEmail.value;
  console.log(userEmailValue);
  // creo una variabile per il check se l'email viene creata
  let emailFound = false;
  //controllo se l'email inserita dall'utente è nella lista con un ciclo for
  for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userEmailValue) {
      //quando l'email è stata trovata email found diventa true
      emailFound = true;
      //quin interrompo il ciclo quando è stata trovata per evitare calcoli inutili
      break;
    }
  }
  //se l'email è nella lista stampa sia in console che nello schermo che è nella lista
  if (emailFound === true) {
    success.textContent = "L'email è nella lista!!!";
    console.log("success!!!");
  } else {
    //altrimenti stampa il contrario
    failed.textContent = "L'email non è nella lista!!!";
    console.log("failed!!!");
  }
});
