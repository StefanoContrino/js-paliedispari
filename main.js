/*

pari e dispari
    L’utente sceglie se puntare su un esito "pari" o "dispari"
    L'utente inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo string due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

Palidroma
    Chiedere all’utente di inserire una parola.
    Creare una funzione per capire se la parola inserita è palindroma.
    
*/ 

// Pari e Dispari

function pariODispari (userChoice, userNumber) {

    userChoice = prompt("Scegli un esito: pari o dispari?").toLowerCase();
    userNumber = prompt("Scegli un numero da 1 a 5 compreso:");

    const computerNumber = Math.floor(Math.random() * 6);

    const sumNumber = parseInt(userNumber) + parseInt(computerNumber);

    const pari = sumNumber % 2 == 0;
    const dispari = sumNumber % 2 != 0;

    if (userNumber > 5) {
        console.log("Hai selezionato un numero più grande di 5. Riprova");
    } else if (pari && userChoice == "pari") {
        console.log(`L'utente ha scelto: ${userNumber}; mentre il computer ha scelto: ${computerNumber}. Il risultato è ${sumNumber}: Ha vinto l'utente`);
    } else if (pari && userChoice == "dispari") {
        console.log(`L'utente ha scelto: ${userNumber}; mentre il computer ha scelto: ${computerNumber}. Il ${sumNumber}: risultato è Ha vinto il computer`);
    } else if (dispari && userChoice == "pari") {
        console.log(`L'utente ha scelto: ${userNumber}; mentre il computer ha scelto: ${computerNumber}. Il ${sumNumber}: risultato è Ha vinto il computer`);
    } else if (dispari && userChoice == "dispari") {
        console.log(`L'utente ha scelto: ${userNumber}; mentre il computer ha scelto: ${computerNumber}. Il risultato è ${sumNumber}: Ha vinto l'utente`);
    } else {
        console.log("Input invalido. Attenzione a inserire 'pari' e 'dispari' con le maiuscole");
    }

}

// Parola palindroma

function isPalindrome(word) {
    let len = word.length - 1;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] != word[len]) {
            return false;
        }
        len--;
    }

    return true;
}