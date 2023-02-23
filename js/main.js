/* 
JAVASCRIPT
*/

//definisco la tariffa per ogni chilometro
const prezzoAlKm = 0.21;
console.log(prezzoAlKm);

//chiedo all'utente il Nome e il Cognome del passeggero
const nameAndSurname = document.querySelector('#nameAndSurname');
console.log(nameAndSurname.value);

//chiedo all'utente quanti chilometri vuole percorrere
const kmDaPercorrere = parseInt(document.querySelector('#kmDaPercorrere'));
const km = kmDaPercorrere.value;
console.log(km);

//chiedo all'utente l'età del passeggero
const anni = document.querySelector('#anni');
console.log(anni.value);

//imposto il valore della tariffa base
let prezzo = prezzoAlKm * km;
console.log(prezzo);

//definisco le variabili che verranno mostrata nell'elemento html con id corrispondente
const risultato = document.querySelector('#risultato');

const nome = document.querySelector('#nome');

const offerta = document.querySelector('#offerta');

const nCarrozza = document.querySelector('#nCarrozza');

const nCodice = document.querySelector('#nCodice');

const leggiForm = document.querySelector('#leggiForm');

//funzione per attivare il form al click del bottone
leggiForm.addEventListener('click',
    function() {
        // se ha meno di 18 anni 
        if (anni.value == 'minorenne') {
            //definisco il nome scritto dall'utente per inserirlo nel biglietto
            nome.innerHTML = nameAndSurname.value;
            //definisco il tipo di offerta da inserire nel biglietto
            offerta.innerHTML = 'Sconto del 20%';
            //definisco il numero di carrozza da inserire ne biglietto
            nCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            //definisco il numero del codice del biglietto da inserire nel biglietto
            nCodice.innerHTML = Math.floor((Math.random() * 100000) + 1) + 90000;
            //definisco sconto del 20%
            let sconto = prezzo / 100 * 20;
            //applico lo sconto del 20%
            prezzo = prezzo - sconto;
            //inserisco il prezzo scontato nel biglietto
            risultato.innerHTML = prezzo.toFixed(2);

        // se ha piu di 65 anni
        } else if (anni.value == 'over65') {
            //definisco il nome scritto dall'utente per inserirlo nel biglietto
            nome.innerHTML = nameAndSurname.value;
            //definisco il tipo di offerta da inserire nel biglietto
            offerta.innerHTML = 'Sconto del 40%';
            //definisco il numero di carrozza da inserire ne biglietto
            nCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            //definisco il numero del codice del biglietto da inserire nel biglietto
            nCodice.innerHTML = Math.floor((Math.random() * 100000) + 1) + 90000;
            //definisco sconto del 40%
            let sconto = prezzo / 100 * 40;
            //applico lo sconto del 40%
            prezzo = prezzo - sconto;
            //inserisco il prezzo scontato nel biglietto
            risultato.innerHTML = prezzo.toFixed(2);

        // se ha tra i 18 e i 65 anni
        } else {
            //definisco il nome scritto dall'utente per inserirlo nel biglietto
            nome.innerHTML = nameAndSurname.value;
            //definisco il tipo di offerta da inserire nel biglietto
            offerta.innerHTML = 'Biglietto standard';
            //definisco il numero di carrozza da inserire ne biglietto
            nCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            //definisco il numero del codice del biglietto da inserire nel biglietto
            nCodice.innerHTML = Math.floor((Math.random() * 99999) + 1) + 90000;
            //inserisco il prezzo di tariffa base nel biglietto
            risultato.innerHTML = prezzo.toFixed(2);
        }
    }
);


















