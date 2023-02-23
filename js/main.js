/* 
JAVASCRIPT
*/

//definisco la tariffa per ogni chilometro
const prezzoAlKm = 0.21;

//chiedo all'utente il Nome e il Cognome del passeggero
let nameAndSurname = document.querySelector('#nameAndSurname');

//chiedo all'utente quanti chilometri vuole percorrere
let kmDaPercorrere = document.querySelector('#kmDaPercorrere');

//chiedo all'utente l'età del passeggero
let anni = document.querySelector('#anni');

//imposto il valore della tariffa base
let prezzo;

//definisco le variabili che verranno mostrata nell'elemento html con id corrispondente
const nome = document.querySelector('#nome');

const offerta = document.querySelector('#offerta');

const nCarrozza = document.querySelector('#nCarrozza');

const nCodice = document.querySelector('#nCodice');

const risultato = document.querySelector('#risultato');

const leggiForm = document.querySelector('#leggiForm');

const resetForm = document.querySelector('#resetForm');

//funzione per attivare il form al click del bottone
leggiForm.addEventListener('click',

    function() {
        console.log(prezzoAlKm);
        console.log(nameAndSurname.value);
        console.log(kmDaPercorrere);
        console.log(anni.value);
        console.log(prezzo);
        // se ha meno di 18 anni 
        if (anni.value == 'minorenne') {
            //definisco il nome scritto dall'utente per inserirlo nel biglietto
            nome.innerHTML = nameAndSurname.value;
            //definisco il tipo di offerta da inserire nel biglietto
            offerta.innerHTML = 'Sconto del 20%';
            //definisco il numero di carrozza da inserire ne biglietto
            nCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            //definisco il numero del codice del biglietto da inserire nel biglietto
            nCodice.innerHTML = Math.floor(Math.random() * 10000) + 90000;
            //definisco la formula per la tariffa base
            let km = parseInt(kmDaPercorrere.value);
            prezzo = prezzoAlKm * km;
            //definisco sconto del 20%
            let sconto = prezzo / 100 * 20;
            //applico lo sconto del 20%
            prezzo = prezzo - sconto;
            //inserisco il prezzo scontato nel biglietto
            risultato.innerHTML = `${prezzo.toFixed(2)} €`;

        // se ha piu di 65 anni
        } else if (anni.value == 'over65') {
            //definisco il nome scritto dall'utente per inserirlo nel biglietto
            nome.innerHTML = nameAndSurname.value;
            //definisco il tipo di offerta da inserire nel biglietto
            offerta.innerHTML = 'Sconto del 40%';
            //definisco il numero di carrozza da inserire ne biglietto
            nCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            //definisco il numero del codice del biglietto da inserire nel biglietto
            nCodice.innerHTML = Math.floor(Math.random() * 10000) + 90000;
            //definisco la formula per la tariffa base
            let km = parseInt(kmDaPercorrere.value);
            prezzo = prezzoAlKm * km;
            //definisco sconto del 40%
            let sconto = prezzo / 100 * 40;
            //applico lo sconto del 40%
            prezzo = prezzo - sconto;
            //inserisco il prezzo scontato nel biglietto
            risultato.innerHTML = `${prezzo.toFixed(2)} €`;

        // se ha tra i 18 e i 65 anni
        } else {
            //definisco il nome scritto dall'utente per inserirlo nel biglietto
            nome.innerHTML = nameAndSurname.value;
            //definisco il tipo di offerta da inserire nel biglietto
            offerta.innerHTML = 'Biglietto standard';
            //definisco il numero di carrozza da inserire ne biglietto
            nCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            //definisco il numero del codice del biglietto da inserire nel biglietto
            nCodice.innerHTML = Math.floor(Math.random() * 10000) + 90000;
            //definisco la formula per la tariffa base
            let km = parseInt(kmDaPercorrere.value);
            prezzo = prezzoAlKm * km;
            //inserisco il prezzo di tariffa base nel biglietto
            risultato.innerHTML = `${prezzo.toFixed(2)} €`;
        }
    }
);

//funzione per resettare il form al click del bottone
resetForm.addEventListener('click', 
function() {
    // elimino il contenuto della casella con il nome e cognome
    nome.innerHTML = '';
    // elimino il contenuto della casella con il piano d'offerta
    offerta.innerHTML = '';
    // elimino il contenuto della casella con il numero corrispondente alla carrozza
    nCarrozza.innerHTML = '';
    // elimino il contenuto della casella con il numero identificativo del biglietto
    nCodice.innerHTML = '';
    // elimino il contenuto della casella con il prezzo finale
    risultato.innerHTML = '';
}
);

resetForm.addEventListener('click', 
function eraseText() {
    // elimino il contenuto inserito nella richiesta del nome
    document.getElementById('nameAndSurname').value = '';
    // elimino il contenuto inserito nella richiesta dei km
    document.getElementById('kmDaPercorrere').value = '';
}
);

















