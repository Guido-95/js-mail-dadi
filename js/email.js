// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// richiesta email
var emailUtente = prompt("Inserisci email");

console.log(emailUtente);

// array email
var listaEmail = ["email1","email2","email3",
"email4","email5"];

console.log(listaEmail);

var chiaveAccesso = false;
for (var i = 0; i < listaEmail.length; i++) {
    
    if (emailUtente == listaEmail[i]) {
        chiaveAccesso = true;  
    } 

}

if (chiaveAccesso == true) {
    document.getElementById("log-success").innerHTML = "Complimenti, sei loggato come : " + emailUtente;
    
} else {
    document.getElementById("log-fail").innerHTML = "<img src=\"img/divieto.png\">"+"Accesso fallito, controlla i tuoi dati";
}




