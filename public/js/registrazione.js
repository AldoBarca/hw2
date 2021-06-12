const registrazione = document.forms['registrazione'];
registrazione.addEventListener('submit', validazione);
const errore1 = document.querySelector('#errore1');
const errore2 = document.querySelector('#errore2');
const errore3 = document.querySelector('#errore3');
let nu = document.querySelector('#nome_u');
let pw = document.querySelector('#pw');
let nome = document.querySelector('#nom');
let cognome = document.querySelector('#cogn');
let codf = document.querySelector('#codf');
let i = 0;
const e1 = document.querySelector('#e1');
const p1 = document.querySelector('#problem1');
const p2 = document.querySelector('#problem2');
console.log('ok');
/* 
funzione che al submit prima verifica lato js se i dati sono inseriti e rispettano la condizione e poi nel caso lato js sia tutto ok
inviano i dati tramite fetch ad una pagina php(fetch_reg.php) che mette i dati nel database e in base all'esito , se positivo manda al login
se invece i dati non sono corretti stampa un messaggio personalizzato in base a se è un errore generico o è già presente un account con quel
nome utente .

*/
function validazione(event) {
    i = 0;

    if (registrazione.nome.value.length == 0 || registrazione.cognome.value.length == 0 || registrazione.nome_utente_reg.value.length == 0 ||
        registrazione.password_reg.value.length < 5 || registrazione.password_reg.value.length > 16 || registrazione.codf.value.length < 5 ||
        registrazione.codf.value.length > 16 || (!document.querySelector('#uomo').checked && !document.querySelector('#donna').checked) ||
        (!document.querySelector('#op').checked && !document.querySelector('#paz').checked) || !document.querySelector('#permesso').checked) {

        event.preventDefault();
        errore1.classList.add('hidden');
        errore2.classList.add('hidden');
        errore3.classList.add('hidden');


        if (registrazione.password_reg.value.length < 5 || registrazione.password_reg.value.length > 16 ||
            registrazione.codf.value.length < 5 ||
            registrazione.codf.value.length > 16) {

            errore1.classList.remove('hidden');
            document.querySelector('#errore4').classList.add('hidden');
            document.querySelector('#errore5').classList.add('hidden');

        } else if (!document.querySelector('#permesso').checked) {

            errore3.classList.remove('hidden');
            document.querySelector('#errore4').classList.add('hidden');
            document.querySelector('#errore5').classList.add('hidden');

        } else {
            errore2.classList.remove('hidden');
            document.querySelector('#errore4').classList.add('hidden');
            document.querySelector('#errore5').classList.add('hidden');

        }
    } else {
        event.preventDefault();
        document.querySelector('#errore5').classList.add('hidden');
        document.querySelector('#errore4').classList.add('hidden');
        console.log(registrazione.nome_utente_reg.value);
        fetch('/hw2/public/registrazione/nome_utente/' + encodeURIComponent(registrazione.nome_utente_reg.value)).then(handler).then(risolviamo);
        fetch('/hw2/public/registrazione/codice_fiscale/' + encodeURIComponent(registrazione.codf.value)).then(handler).then(risolviamo);
    }

    function handler(response) {

        const ritorno = response.text();
        return ritorno;


    }

    function risolviamo(ritorno) {

        console.log(ritorno);
        if (ritorno == 'ok') {
            console.log('ok');
            i++;
            if (i == 2) { registrazione.submit(); }

        }
        if (ritorno == 'cf_utilizzato') {
            event.preventDefault();
            document.querySelector('#errore5').classList.remove('hidden');

        }
        if (ritorno == 'nome_utente_utilizzato') {

            console.log('NO');
            document.querySelector('#errore4').classList.remove('hidden');
            event.preventDefault();

        }


    }
}