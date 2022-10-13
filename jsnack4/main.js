/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const gatsbyInvites = [
    "pippo",
    "pluto",
    "paperino",
    "topolino",
    "minnie"
];
//chiedi all’utente il suo nome
const userName = prompt("Scrivi il tuo nome");

//loop while e IF statement per controllare se userName è dentro l'array gatsbyInvites
let i = 0;
let isValid;
const answerEl = document.querySelector("h1");
while (i < gatsbyInvites.length) {
    const singleInvite = gatsbyInvites[i];
    if (userName === singleInvite) {
        isValid = true;
    }
    i++;
}

//comunica all'utente se può partecipare o no alla festa.
if (isValid) {
    answerEl.innerHTML = "Puoi partecipare alla festa del grande Gatsby";
} else {
    answerEl.innerHTML = "Non puoi partecipare alla festa del grande Gatsby";
}