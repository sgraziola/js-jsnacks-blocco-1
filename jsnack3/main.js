//Il software deve chiedere per 10 volte all’utente di inserire un numero.
let userNum;
let somma = 0;
for( let i = 1; i <= 10; i++){
    userNum = Number(prompt(`Inserisci il numero ${i}`));
    console.log(userNum);
    somma += userNum;
}

console.log("la somma è " + somma);




//Il programma stampa la somma di tutti i numeri inseriti.

