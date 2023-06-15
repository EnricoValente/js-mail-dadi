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

const form = document.getElementById('email-form');

form.addEventListener('submit', function() {

    const userEmail = document.getElementById('user-email').value; 
    console.log('userEmail', userEmail, typeof userEmail);

    // Controlla che email sia valida (non è un numero)

    
    const listEmail = [
        'luca@boolean.com',
        'francesco@boolean.com',
        'federico@boolean.com',
        'martina@boolean.com',
        'roberto@boolean.com',
        'matteo@boolean.com',
        'arianna@boolean.com',
        'giorgia@boolean.com',
        'giovanni@boolean.com',
        'letizia@boolean.com',
        'giuseppe@boolean.com',
        'ginevra@boolean.com',
    ]
    
    console.log('listEmail', listEmail, typeof listEmail);

    let emailFound = false
    let i = 0


    
    for(i=0; i < listEmail.length; i++) {

        

        if (userEmail == listEmail[i]) {

            emailFound = true;

            console.log(listEmail[i]);
            
        }
        
    }
       
        
       
    if(emailFound == true) {
        console.log('Email valida');
     }
     else {
         console.log('accesso non consentito');
     }
      
    
})






