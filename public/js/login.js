const login = document.forms['form_login'];

const errore_login = document.querySelector('#errore_login');
const p = document.querySelector("#cred_sbagliate");
const nu = document.querySelector('#nome_utente');
const pw = document.querySelector('#password');




function controlla_campo(event) {

    if (event.currentTarget.value.lenght == 0) {
        event.currentTarget.classList.add('vuoto');
    } else { event.currentTarget.classList.remove('vuoto'); }
}
const inputs = document.querySelectorAll('input[type= "text "],input[type="password"]');
for (input of inputs) {

    input.addEventListener('blur', controlla_campo);
}

/* codice che al submit fa una breve validazione lato js e in caso effettivamente siano stati inseriti dei dati
controlla se tali dati sono presenti nel database e in caso positivo mandano alla propria homepage e avvia una sessione.
Tramite sessione sarà poi possibile recepire i dati dell'utente e capire se è un operatore sanitario o un paziente.
*/

const form = document.querySelector('#form_login');
form.addEventListener('submit', validazione_login);

function validazione_login(event) {
    const h3 = document.querySelector('#successo');
    if (h3) h3.classList.add('hidden');


    if (login.nome_utente.value.length == 0 || login.password.value.length == 0) {
        event.preventDefault();

        errore_login.classList.remove('hidden');
        p.classList.add("hidden");

    }



}