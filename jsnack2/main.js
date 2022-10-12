//L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt ("Inserisci la prima parola");
const secondWord = prompt ("Inserisci la seconda parola");
//Il software stampa prima la parola più corta, poi la parola più lunga.
const parolaLunga = document.querySelector("h1");
let longer;
if(firstWord.length > secondWord.length){
    longer = firstWord;
} else if (secondWord.length > firstWord.length) {
    longer = secondWord;
} else {
    longer = "entrambi";
   // console.log("le due parole sono lunghe uguali");
}

parolaLunga.innerHTML = (`La parola più lunga è ${longer}`)