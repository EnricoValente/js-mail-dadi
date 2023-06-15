// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


/* 
1) creo un form per chiedere all'utente la sua email
2) creo un array con una lista di email
    -SE l'mail dell'utente corrisponde a una delle email scritte nella lista,allora può accedere
    -ALTRIMENTI non può accedere
3) stampo un messaggio sull'esito di controllo 

*/

let form = document.getElementById('email-form');

form.addEventListener('submit', function() {

    let userEmail = document.getElementById('user-email');
    console.log('userEmail', userEmail, typeof userEmail);
    
    let listEmail = ['luca@boolean.com', 'francesco@boolean.com', 'federico@boolean.com', 'martina@boolean.com']
    console.log('listEmail', listEmail, typeof listEmail);

    if(userEmail != listEmail) {
        console.log('Email non valida');
    }
    else {
        console.log('accesso consentito');
    }
    
})






