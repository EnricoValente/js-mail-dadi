// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


let myButton = document.getElementById('my-button');

myButton.addEventListener('click', function (e) {
    e.preventDefault();

    let firstNumber = Math.floor(Math.random() * 6) + 1;
    let secondNumber = Math.floor(Math.random() * 6) + 1;
    
})











