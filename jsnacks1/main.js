/* Snack 1 */
//L’utente inserisce due numeri in successione, con due prompt.
const num1 = Number(prompt("Inserisci il primo numero"));
const num2 = Number(prompt("Inserisci il secondo numero"));
const risultato = document.querySelector("h1")
//Il software stampa il maggiore. 
let maxNum;
if(num1 > num2){
    maxNum = num1;
} else {
    maxNum = num2;
}

//console.log(maxNum);
risultato.innerHTML= (`il numero maggiore è ${maxNum}`);
