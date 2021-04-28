// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
var numeroComputer = Math.floor(Math.random() * 6) + 1;

console.log("numero giocatore: ", numeroGiocatore);
console.log("numero computer: ", numeroComputer);

if (numeroGiocatore > numeroComputer ) {
    document.getElementById("scontro").innerHTML = "Ha vinto il giocatore"
} else if (numeroGiocatore == numeroComputer ) {
    document.getElementById("scontro").innerHTML = "Pareggio"
} else {
    document.getElementById("scontro").innerHTML = "Ha vinto il computer"
}


document.getElementById("giocatore").innerHTML = "Giocatore " + "<strong>"+ numeroGiocatore +"</strong>" + " VS ";

document.getElementById("computer").innerHTML = "Computer "+ "<strong>"+ numeroComputer +"</strong>"  ;