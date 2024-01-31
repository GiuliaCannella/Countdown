// Scaletta
// Prendo gli elementi dal dom
// Metto in ascolto il bottone
// Creo un variabile che inserisca dentro un array vuoto dei numeri randomici da 1 a 10
// Creo un timer di 30 secondi
// SE scaduti i 30 secondi
// Applico la classe a i numeri per farli scomparire
// Fermo il timer
// Creo un prompt che chiede all'utente che numeri ha scelto
// Creo un ciclo per i prompt
// SE NON la risposta dell'utente equivale a i numeri inseriti nell'array
// HA PERSO
// ALTRIMENTI HA VINTO

// recupero elementi dal dom
const button = document.getElementById("button");
const countdown = document.getElementById("countdown");
const numeri = document.getElementById("numeri");
const punteggio = document.getElementById("punteggio");

let count = 3;
let numeriDaGenerare = 1;

// Creo un variabile che inserisca dentro un array vuoto dei numeri
//  randomici da 1 a 10

let randomNumeri = [];
function generateRandomNumbers() {
  let stringaNumeri = "";
  while (randomNumeri.length < numeriDaGenerare) {
    let randomNumero = Math.floor(Math.random() * 10) + 1;

    if (!randomNumeri.includes(randomNumero)) {
      randomNumeri.push(randomNumero);
      if (randomNumeri.length == 5) {
        stringaNumeri += " " + randomNumero;
      } else {
        stringaNumeri += " " + randomNumero + " , ";
      }
    }
  }
  numeri.innerText += stringaNumeri;

  console.log(randomNumeri);
}

// Metto in ascolto il bottone
button.addEventListener("click", () => {
  generateRandomNumbers();
  timer();
  //   getEsito();
});

let showPrompt = false;
function timer() {
  numeri.classList.remove("d-none");
  countdown.innerText = count;
  const time = setInterval(() => {
    if (count == 1) {
      numeri.classList.add("d-none");
    }

    if (count == 0) {
      clearInterval(time);
      count = 3;
      showPrompt = true;
      if (showPrompt) {
        getEsito();
      }
    } else {
      countdown.innerText = --count;
    }
  }, 1000);
}

function getEsito() {
  let punti = 0;

  let arrayResponse = [];
  for (let i = 0; i < numeriDaGenerare; i++) {
    arrayResponse.push(parseInt(prompt("inserisci il numero")));
  }

  for (let i = 0; i < randomNumeri.length; i++) {
    const numero = randomNumeri[i];

    if (numero == arrayResponse[i]) {
      punti++;
    }
  }

  if (punti == numeriDaGenerare) {
    punteggio.innerHTML = `<span class="text-success">HAI VINTO</span> con punteggio: ${punti} su ${numeriDaGenerare} punti`;
  } else {
    punteggio.innerHTML = `<span class="text-danger">HAI PERSO</span> con punteggio: ${punti} su ${numeriDaGenerare} punti`;
  }
  punteggio.classList.remove("d-none");
}
