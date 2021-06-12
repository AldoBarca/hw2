//inizializzazione 



function inizializza(json) {

    console.log(json);
    for (let j = 1; j < 10; j++) {

        let images_pref = '#i' + j;
        let x = j - 1;

        document.querySelector(images_pref).src = json[x].immagine;

        let titoli = [];
        let v = '#v' + j;
        titoli[j] = document.createElement('strong');
        titoli[j].textContent = json[x].titolo;
        document.querySelector(v).appendChild(titoli[j]);

        let immagini = [];
        let imgj = '#img' + j;
        immagini[j] = document.createElement('img');
        immagini[j].src = json[x].immagine;
        document.querySelector(imgj).appendChild(immagini[j])

        let descrizioni = [];
        let d = '#d' + j;
        descrizioni[j] = document.createElement('p');
        descrizioni[j].textContent = json[x].descrizione;
        descrizioni[j].classList.add('a');
        descrizioni[j].classList.add('hidden');
        document.querySelector(d).appendChild(descrizioni[j]);
    }


    const foto1 = document.createElement('img');
    foto1.src = json[11].immagine;
    document.querySelector('.img1').appendChild(foto1);


    const div = document.createElement('div');
    div.classList.add('paragrafo1');
    const descr = document.createElement('p');
    descr.textContent = json[11].descrizione;
    div.appendChild(descr);
    document.querySelector('.img1').appendChild(div);


    const foto2 = document.createElement('img');
    foto2.src = json[10].immagine;
    foto2.classList.add('rifinitura');
    document.querySelector('.img2').appendChild(foto2);

    const div2 = document.createElement('div');
    div2.classList.add('paragrafo2');
    const descrr = document.createElement('p');
    descrr.textContent = json[10].descrizione;
    div2.appendChild(descrr);
    document.querySelector('.img2').appendChild(div2);

    const foto3 = document.createElement('img');
    foto3.src = json[9].immagine;
    document.querySelector('#foto3').appendChild(foto3);

    const foto4 = document.createElement('img');
    foto4.src = json[12].immagine;
    document.querySelector('#conten').appendChild(foto4);

    const foto5 = document.createElement('img');
    foto5.src = json[13].immagine;
    foto5.classList.add('change_reparto');
    const foto6 = document.createElement('img');
    foto6.classList.add('change_terapia');
    foto6.src = json[13].immagine;


    document.querySelector('#modifica').appendChild(foto5);
    document.querySelector('#modify').appendChild(foto6);
    const terapy = document.querySelector('.change_terapia');
    const ward = document.querySelector('.change_reparto');
    terapy.addEventListener('click', change_terapy);
    ward.addEventListener('click', change_reparto);

    const checked = document.querySelectorAll('.checked');

    for (checke of checked) { checke.src = json[14].immagine; }

    const unchecked = document.querySelectorAll('.unchecked');
    for (uncheke of unchecked) { uncheke.src = json[15].immagine; }
}
fetch("http://localhost/hw2/public/home/inizializza").then(onResponse, onError).then(inizializza);

//fetch per ottenere le kcal

let api_alimenti = document.forms['alimenti'];

api_alimenti.addEventListener('submit', ricercaKcal);

function ricercaKcal(event) {
    event.preventDefault();
    document.querySelector('#kcal_alimento').classList.add('hidden');
    document.querySelector('#proteine').classList.add('hidden');
    document.querySelector('#carboidrati').classList.add('hidden');
    document.querySelector('#potassio').classList.add('hidden');
    document.querySelector('#vitamina_c').classList.add('hidden');
    document.querySelector('.nutrimenti').classList.add('hidden');

    document.querySelector('#show_kcal').classList.add('hidden');
    document.querySelector('#show_c').classList.add('hidden');
    document.querySelector('#show_carboidrati').classList.add('hidden');
    document.querySelector('#show_proteine').classList.add('hidden');
    document.querySelector('#show_potassio').classList.add('hidden');


    fetch('/hw2/public/Api/' + encodeURIComponent(api_alimenti.alimento.value)).then(onResponse, onError).then(onAlimenti);


    function onAlimenti(json) {
        $kcal = json[0]['energ_kcal'];
        $vitamina_c = json[0]['vit_c'];
        $potassio = json[0]['potassium'];
        $proteine = json[0]['protein'];
        $carboidrati = json[0]['carbohydrt'];

        document.querySelector('#show_kcal').classList.remove('hidden');
        document.querySelector('#show_c').classList.remove('hidden');
        document.querySelector('#show_carboidrati').classList.remove('hidden');
        document.querySelector('#show_proteine').classList.remove('hidden');
        document.querySelector('#show_potassio').classList.remove('hidden');

        document.querySelector('.nutrimenti').classList.remove('hidden');
        document.querySelector('#kcal_alimento').classList.remove('hidden');
        document.querySelector('#proteine').classList.remove('hidden');
        document.querySelector('#carboidrati').classList.remove('hidden');
        document.querySelector('#potassio').classList.remove('hidden');
        document.querySelector('#vitamina_c').classList.remove('hidden');

        document.querySelector('#kcal_alimento').textContent = "Kcal contenute: " + $kcal;
        document.querySelector('#proteine').textContent = "Proteine assunte: " + $proteine + " grammi";
        document.querySelector('#carboidrati').textContent = "Carboidrati assunti: " + $carboidrati + " grammi";
        document.querySelector('#potassio').textContent = "Potassio contenuto: " + $potassio + " milligrammi";
        document.querySelector('#vitamina_c').textContent = "Vitamina c presente: " + $vitamina_c + " milligrammi";


    }
}

document.querySelector('#show_kcal').addEventListener('click', mostra_descrizione_kcal);
document.querySelector('#show_c').addEventListener('click', mostra_descrizione_c);
document.querySelector('#show_carboidrati').addEventListener('click', mostra_descrizione_carboidrati);
document.querySelector('#show_proteine').addEventListener('click', mostra_descrizione_proteine);
document.querySelector('#show_potassio').addEventListener('click', mostra_descrizione_potassio);
document.querySelector('#hide_kcal').addEventListener('click', nascondi_descrizione_kcal);
document.querySelector('#hide_c').addEventListener('click', nascondi_descrizione_c);
document.querySelector('#hide_carboidrati').addEventListener('click', nascondi_descrizione_carboidrati);
document.querySelector('#hide_proteine').addEventListener('click', nascondi_descrizione_proteine);
document.querySelector('#hide_potassio').addEventListener('click', nascondi_descrizione_potassio);

function mostra_descrizione_kcal() {
    document.querySelector('#descr_kcal').classList.remove('hidden');
    document.querySelector('#hide_kcal').classList.remove('hidden');
    document.querySelector('#show_kcal').classList.add('hidden');


}

function mostra_descrizione_c() {
    document.querySelector('#descr_c').classList.remove('hidden');
    document.querySelector('#hide_c').classList.remove('hidden');
    document.querySelector('#show_c').classList.add('hidden');


}

function mostra_descrizione_carboidrati() {
    document.querySelector('#descr_carboidrati').classList.remove('hidden');
    document.querySelector('#hide_carboidrati').classList.remove('hidden');
    document.querySelector('#show_carboidrati').classList.add('hidden');

}

function mostra_descrizione_proteine() {
    document.querySelector('#descr_proteine').classList.remove('hidden');
    document.querySelector('#hide_proteine').classList.remove('hidden');
    document.querySelector('#show_proteine').classList.add('hidden');

}

function mostra_descrizione_potassio() {
    document.querySelector('#descr_potassio').classList.remove('hidden');
    document.querySelector('#hide_potassio').classList.remove('hidden');
    document.querySelector('#show_potassio').classList.add('hidden');

}


function nascondi_descrizione_kcal() {
    document.querySelector('#show_kcal').classList.remove('hidden');
    document.querySelector('#hide_kcal').classList.add('hidden');
    document.querySelector('#descr_kcal').classList.add('hidden');

}

function nascondi_descrizione_c() {
    document.querySelector('#show_c').classList.remove('hidden');
    document.querySelector('#hide_c').classList.add('hidden');
    document.querySelector('#descr_c').classList.add('hidden');

}

function nascondi_descrizione_carboidrati() {
    document.querySelector('#show_carboidrati').classList.remove('hidden');
    document.querySelector('#hide_carboidrati').classList.add('hidden');
    document.querySelector('#descr_carboidrati').classList.add('hidden');

}

function nascondi_descrizione_proteine() {
    document.querySelector('#show_proteine').classList.remove('hidden');
    document.querySelector('#hide_proteine').classList.add('hidden');
    document.querySelector('#descr_proteine').classList.add('hidden');

}

function nascondi_descrizione_potassio() {
    document.querySelector('#show_potassio').classList.remove('hidden');
    document.querySelector('#hide_potassio').classList.add('hidden');
    document.querySelector('#descr_potassio').classList.add('hidden');

}

/*Rest Api Dati covid totali per nazione 
Rest Api che sfrutta una api esterna per ottenere tramite fetch e API KEY i dati covid di una nazione scritta dall'utente che visita la homepage
*/
const form = document.forms['aggiornamenti'];
form.addEventListener('submit', search);

function search(event) {
    event.preventDefault();
    const risultati = document.querySelector("#risultati");
    risultati.innerHTML = "";
    risultati.classList.remove("hidden");

    const input = document.querySelector('#nazione');
    const nazione = encodeURIComponent(input.value);

    fetch("https://restcountries.eu/rest/v2/name/" + nazione).then(onResponse, onError).then(onNazioni);

    fetch("/hw2/public/Api_nazioni/" + nazione).then(onResponse, onError).then(onSearch);


}

function onSearch(json) {
    if (!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);
    let Positivi_totali = json[0].confirmed;
    let Deaths = json[0].deaths;
    let ricoverati = json[0].recovered;


    let containerr = document.querySelector('#risultati');

    let scritta = document.createElement('p');
    scritta.textContent = "Casi totali: " + Positivi_totali;
    containerr.appendChild(scritta);

    let scritta1 = document.createElement('p');
    scritta1.textContent = "Deceduti totali: " + Deaths;
    containerr.appendChild(scritta1);
    let scritta2 = document.createElement('p');
    scritta2.textContent = "Ricoverati totali: " + ricoverati;
    containerr.appendChild(scritta2);


}

function onNazioni(json) {
    if (!json) {
        console.log('Nessun json ritornato');
        return;
    }

    let n_abitanti = json[0].population;
    let containerr = document.querySelector('#risultati');
    let scritta = document.createElement('p');
    scritta.textContent = "Num.Abitanti: " + n_abitanti;
    containerr.appendChild(scritta);
    console.log(json);
}




/*Rest Api Covid giornalieri per Italia,
al contrario della precedente è avviata di default e fornisce i dati covid giornalieri dell'Italia.
I dati di solito sono però disponibili solo dopo le 5 circa del pomeriggio non essendo ancora rilevati
*/
let url = "https://api.quarantine.country/api/v1/summary/region?region=italy";
fetch(url).then(onResponse, onError).then(onJson);

function onResponse(response) {
    if (!response.ok) { console.log('Problema con la riposta'); return null; }
    return response.json();
}

function onError(error) { console.log('Errore' + error); }

function onJson(json) {
    if (!json) {
        console.log('Nessun json ritornato');
        return;
    }

    let casi_attivi = json.data.summary.active_cases;
    let casi_nuovi = json.data.change.total_cases;
    let deceduti = json.data.change.deaths;
    let ricoverati = json.data.change.recovered;
    let pazienti = json.data.summary.recovered;
    if (casi_nuovi === 0) { casi_nuovi = "Aggiornamenti non rilevati"; }
    if (ricoverati === 0) { ricoverati = "Aggiornamenti non rilevati"; }
    if (deceduti === 0) { deceduti = "Aggiornamenti non rilevati"; }
    let containerr = document.querySelector('#CovidNews');
    let scritta0 = document.createElement('p');
    let scritta = document.createElement('p');
    let scritta1 = document.createElement('p');
    let scritta2 = document.createElement('p');
    let scritta3 = document.createElement('p');
    scritta2.textContent = "Pazienti curati finora: " + (pazienti - casi_attivi);
    containerr.appendChild(scritta2);
    scritta0.textContent = "Casi attuali: " + casi_attivi;
    containerr.appendChild(scritta0);


    scritta1.textContent = "Ricoverati attuali: " + ricoverati;
    containerr.appendChild(scritta1);
    scritta.textContent = "Casi di oggi: " + casi_nuovi;
    containerr.appendChild(scritta);
    scritta3.textContent = "Deceduti di oggi: " + deceduti;
    containerr.appendChild(scritta3);
}





/*funzione che permette agli operatori sanitari di ricercare un paziente tramite codice fiscale e stamparne i dati a schermo
(ruolo impostato alla registrazione, nella realtà sarebbe fornito dall'ospedale 
stesso non essendo di certo creabile un account operatore sanitario).

La funzione sfrutta una richiesta fetch ad una pagina php (fetch_trova_paz.php)che si occupa di fare la query e restituire in json i dati 
del paziente stesso.
*/


/*funzioni che quando si clicca sull'icona per operatori sanitari per modificare i dati di un paziente fanno apparire/scomparire gli input
necessari alla modifica */
function change_reparto() {
    document.querySelector('#modifica_reparto').classList.remove('hidden');
    document.querySelector('#modifica_terapia').classList.add('hidden');
    document.querySelector('#problema').classList.add('hidden');
    document.querySelector('#ok_ter').classList.add('hidden');
    document.querySelector('#ok_rep').classList.add('hidden');
}

function change_terapy() {
    document.querySelector('#modifica_reparto').classList.add('hidden');
    document.querySelector('#modifica_terapia').classList.remove('hidden');
    document.querySelector('#problema').classList.add('hidden');
    document.querySelector('#ok_ter').classList.add('hidden');
    document.querySelector('#ok_rep').classList.add('hidden');
}


/* Parte di codice attraverso il cui grazie ad una richiesta API REST tramite fetch ad un'altra pagina php del mio sito 
(fetch_inserimento_operatore.php), fa in background l'inserimento nel database della modifica a due dati del paziente da parte degli operatori 
e stampa ,tramite la rimozione della classe hidden di un elemento html,  una notifica di risultato positivo o in caso di errore nell'inserimento 
una notifica di errore
Vi sono due funzioni, una per la modifica della terapia e una per la modifica del reparto attuale di degenza
*/
const ter = document.forms['terapia'];
ter.addEventListener('submit', inserisci_terapia);


function inserisci_terapia(event) {
    event.preventDefault();
    const input = document.querySelector('#modulo_terapia');
    document.querySelector('#terapia_nascosta').value = input.value;
    let cf = document.querySelector('#cf_nascosto').value;
    let terapia = input.value;
    fetch('/hw2/public/home/inserisci_terapia/' + encodeURIComponent(cf) + '/' + encodeURIComponent(terapia)).then(handler, onError).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;
        console.log(a);
        if (a == 'ok') {
            document.querySelector('#problema').classList.add('hidden');
            document.querySelector('#ok_ter').classList.remove('hidden');
            document.querySelector('#ok_rep').classList.add('hidden');
            document.querySelector('#terapia').textContent = document.querySelector('#terapia_nascosta').value;
            document.querySelector('#modifica_reparto').classList.add('hidden');
            document.querySelector('#modifica_terapia').classList.add('hidden');
            document.querySelector('#modulo_terapia').value = '';

        } else {
            document.querySelector('#problema').classList.remove('hidden');

        }
    }

}


const rep = document.forms['reparto'];
rep.addEventListener('submit', inserisci_reparto);

function inserisci_reparto(event) {
    event.preventDefault();
    const input = document.querySelector('#modulo_reparto');
    document.querySelector('#reparto_nascosto').value = input.value;
    let cf = document.querySelector('#cf_nascosto').value;
    let reparto = input.value;
    console.log(cf);
    console.log(reparto);

    fetch('/hw2/public/home/inserisci_reparto/' + encodeURIComponent(cf) + '/' + encodeURIComponent(reparto)).then(handler, onError).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;
        console.log(a);
        if (a == 'ok') {
            document.querySelector('#problema').classList.add('hidden');
            document.querySelector('#ok_ter').classList.add('hidden');
            document.querySelector('#ok_rep').classList.remove('hidden');
            document.querySelector('#reparto').textContent = document.querySelector('#reparto_nascosto').value;
            document.querySelector('#modifica_reparto').classList.add('hidden');
            document.querySelector('#modifica_terapia').classList.add('hidden');
            document.querySelector('#modulo_reparto').value = '';
        } else {
            document.querySelector('#problema').classList.remove('hidden');

        }
    }

}


const trova_paziente = document.forms['ricerca'];
if (trova_paziente) { trova_paziente.addEventListener('submit', cerca_paziente); }


function cerca_paziente(event) {

    event.preventDefault();
    document.querySelector('#problema').classList.add('hidden');
    document.querySelector('#ok_ter').classList.add('hidden');
    document.querySelector('#ok_rep').classList.add('hidden');

    document.querySelector('#modulo_reparto').value = '';
    document.querySelector('#modulo_terapia').value = '';
    document.querySelector('#modifica_reparto').classList.add('hidden');
    document.querySelector('#modifica_terapia').classList.add('hidden');

    const input = document.querySelector('#modulo_operatore');
    console.log(input.value);
    document.querySelector('#cf_nascosto').value = input.value;

    const cf = input.value;
    fetch('/hw2/public/home/trova_paziente/' + encodeURIComponent(cf)).then(handler, onError).then(onSearch_paz);

    function handler(response) {
        if (!response) { console.log('Nessuna risposta') }
        console.log(response);
        return response.json();

    }

    function onSearch_paz(json) {

        if (!json) {

            console.log('Nessun json ritornato');
            return;
        }
        console.log(json);
        const paziente = json;

        if (paziente[0] === 'nessun paziente trovato') {
            const risultati = document.querySelector('#dati_paziente');
            risultati.classList.add('hidden');

            const no_risultati = document.querySelector("#no_risultati");
            no_risultati.classList.remove('hidden');
            no_risultati.innerHTML = '';
            let error404 = document.createElement('h3');
            error404.textContent = 'Nessun paziente trovato.';
            no_risultati.appendChild(error404);
        } else {
            const no_risultati = document.querySelector("#no_risultati");
            no_risultati.classList.add('hidden');
            no_risultati.innerHTML = '';
            const risultati = document.querySelector('#dati_paziente');
            risultati.classList.remove('hidden');
            let nome = paziente['nome'];
            let cognome = paziente['cognome'];
            let terapia = paziente['terapia'];
            let reparto = paziente['reparto'];
            let nominativo = nome + ' ' + cognome;
            if (reparto === null) reparto = 'Attualmente non in degenza';
            if (terapia === null) terapia = 'Nessuna terapia da seguire al momento';


            const dato1 = document.querySelector('#nominativo');
            dato1.textContent = nominativo;
            const dato3 = document.querySelector('#reparto');
            dato3.textContent = reparto;
            const dato4 = document.querySelector('#terapia');
            dato4.textContent = terapia;
        }
    }
}



const logo = document.querySelector('#conten');
logo.addEventListener('click', porta_scheda);

function porta_scheda() { window.location = "http://localhost/hw2/public/Scheda_utente" }
















/*funzione che ha lo scopo di vedere ,all'avvio della homepage per un dato utente,
 quali visite mediche ha già prenotato(ossia sono inserite nel database) e farle vedere anche nel sito tra quelle prenotate.
 Naturalmente grazie a ciò nel sito è impossibile prenotare due volte una visita essendo già prenotata, a meno che per l'appunto non venga 
 disdetta tramite apposito bottone e dunque anche rimossa dal database

*/
function inizialize() {

    let nome_utente = document.querySelector('#nome_ut').value;




    fetch('/hw2/public/home/inizializza_visite/' + nome_utente).then(handler).then(risolviamo);

    function handler(response) {
        if (!response) { console.log('Nessuna risposta') }
        console.log(response);
        return response.json();

    }

    function risolviamo(ritorno) {
        if (!ritorno) {
            console.log('Nessun json ritornato');
            return;
        }
        const visite = ritorno;
        console.log(visite);
        const lenght = Object.keys(visite).length;
        for (let j = 0; j < lenght; j++) {
            if (ritorno[j].visita == 'EsameDelSangue') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p1');
                p.classList.remove('hidden');
                i++;
                p1.removeEventListener('click', ap1);
                c1.addEventListener('click', rp1);
            }
            if (ritorno[j].visita == 'Elettrocardiogramma') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p2');
                p.classList.remove('hidden');
                i++;
                p2.removeEventListener('click', ap2);
                c2.addEventListener('click', rp2);
            }
            //3
            if (ritorno[j].visita == 'Endoscopia') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p3');
                p.classList.remove('hidden');
                i++;
                p3.removeEventListener('click', ap3);
                c3.addEventListener('click', rp3);
            }
            if (ritorno[j].visita == 'Biopsia') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p4');
                p.classList.remove('hidden');
                i++;
                p4.removeEventListener('click', ap4);
                c4.addEventListener('click', rp4);
            }
            if (ritorno[j].visita == 'Cistografia') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p5');
                p.classList.remove('hidden');
                i++;
                p5.removeEventListener('click', ap5);
                c5.addEventListener('click', rp5);
            }
            if (ritorno[j].visita == 'Calcemia') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p6');
                p.classList.remove('hidden');
                i++;
                p6.removeEventListener('click', ap6);
                c6.addEventListener('click', rp6);
            }
            if (ritorno[j].visita == 'Broncoscopia') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p7');
                p.classList.remove('hidden');
                i++;
                p7.removeEventListener('click', ap7);
                c7.addEventListener('click', rp7);
            }
            if (ritorno[j].visita == 'RisonanzaMagnetica') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p8');
                p.classList.remove('hidden');
                i++;
                p8.removeEventListener('click', ap8);
                c8.addEventListener('click', rp8);
            }
            if (ritorno[j].visita == 'Tampone') {
                preferiti.classList.remove('hidden');
                const p = document.querySelector('#p9');
                p.classList.remove('hidden');
                i++;
                p9.removeEventListener('click', ap9);
                c9.addEventListener('click', rp9);
            }
        }



    }



}


inizialize();


let i = 0;
const preferiti = document.querySelector('#ScrittaPreferiti');
/*funzioni per aggiunta e rimozione tra i preferiti, ap sta per add preferiti e rp per remove preferiti
Rispetto ai precedenti mhw 1,2 e 3 ora tutte le funzioni aggiungono / rimuovono dal database la visita apposita dal database oltre che
mostrare a schermo la visita prenotata come prima.
Ciò è implementato tramite fetch a due pagine php una(fetch_addP.php) che aggiunge al database una data visita e 
un'altra(fetch_remP.php)(P sta per prenotazione )  che rimuove la visita dal database e visivamente nel sito tra quelle prenotate.


*/
function ap1() {
    document.querySelector('#visita_non_inserita').classList.add('hidden');


    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'EsameDelSangue';
    console.log(nome_utente);
    console.log(visita);
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + visita).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p1');
            p.classList.remove('hidden');
            i++;
            p1.removeEventListener('click', ap1);
            c1.addEventListener('click', rp1);
        } else {
            document.querySelector('#visita_non_inserita').classList.remove('hidden');

        }
    }




}

function rp1() {

    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'EsameDelSangue';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p1');
            p.classList.add('hidden');
            i--;
            c1.removeEventListener('click', rp1);
            p1.addEventListener('click', ap1);
            if (i == 0) { preferiti.classList.add('hidden'); }
        } else console.log('errore');
    }


}



const p1 = document.querySelector('#u1');
if (p1 != null) p1.addEventListener('click', ap1);

const c1 = document.querySelector('#c1');
if (c1 != null) c1.addEventListener('click', rp1);

//2
function ap2() {

    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Elettrocardiogramma';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    document.querySelector('#visita_non_inserita').classList.add('hidden');


    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p2');
            p.classList.remove('hidden');
            i++;
            p2.removeEventListener('click', ap2);
            c2.addEventListener('click', rp2);
        } else document.querySelector('#visita_non_inserita').classList.remove('hidden');
    }



}

function rp2() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Elettrocardiogramma';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);


    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p2');
            p.classList.add('hidden');
            i--;
            c2.removeEventListener('click', rp2);
            p2.addEventListener('click', ap2);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else console.log('errore');
    }



}




const p2 = document.querySelector('#u2');
p2.addEventListener('click', ap2);

const c2 = document.querySelector('#c2');
c2.addEventListener('click', rp2);
//3
function ap3() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Endoscopia';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    document.querySelector('#visita_non_inserita').classList.add('hidden');


    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p3');
            p.classList.remove('hidden');
            i++;
            p3.removeEventListener('click', ap3);
            c3.addEventListener('click', rp3);
        } else document.querySelector('#visita_non_inserita').classList.remove('hidden');
    }


}

function rp3() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Endoscopia';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p3');
            p.classList.add('hidden');
            i--;
            c3.removeEventListener('click', rp3);
            p3.addEventListener('click', ap3);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else console.log('errore');
    }





}

const p3 = document.querySelector('#u3');
p3.addEventListener('click', ap3);

const c3 = document.querySelector('#c3');
c3.addEventListener('click', rp3);


function ap4() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Biopsia';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    document.querySelector('#visita_non_inserita').classList.add('hidden');


    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p4');
            p.classList.remove('hidden');
            i++;
            p4.removeEventListener('click', ap4);
            c4.addEventListener('click', rp4);
        } else console.log('errore');
    }


}

function rp4() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Biopsia';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p4');
            p.classList.add('hidden');
            i--;
            c4.removeEventListener('click', rp4);
            p4.addEventListener('click', ap4);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else document.querySelector('#visita_non_inserita').classList.remove('hidden');
    }





}

const p4 = document.querySelector('#u4');
p4.addEventListener('click', ap4);

const c4 = document.querySelector('#c4');
c4.addEventListener('click', rp4);



function ap5() {
    document.querySelector('#visita_non_inserita').classList.add('hidden');
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Cistografia';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);



    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p5');
            p.classList.remove('hidden');
            i++;
            p5.removeEventListener('click', ap5);
            c5.addEventListener('click', rp5);
        } else document.querySelector('#visita_non_inserita').classList.remove('hidden');
    }


}

function rp5() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Cistografia';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p5');
            p.classList.add('hidden');
            i--;
            c5.removeEventListener('click', rp5);
            p5.addEventListener('click', ap5);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else console.log('errore');
    }





}

const p5 = document.querySelector('#u5');
p5.addEventListener('click', ap5);

const c5 = document.querySelector('#c5');
c5.addEventListener('click', rp5);



function ap6() {

    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Calcemia';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    document.querySelector('#visita_non_inserita').classList.add('hidden');

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p6');
            p.classList.remove('hidden');
            i++;
            p6.removeEventListener('click', ap6);
            c6.addEventListener('click', rp6);
        } else document.querySelector('#visita_non_inserita').classList.remove('hidden');
    }


}

function rp6() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Calcemia';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);



    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;
        console.log(a);
        if (a == 'ok') {
            const p = document.querySelector('#p6');
            p.classList.add('hidden');
            i--;
            c6.removeEventListener('click', rp6);
            p6.addEventListener('click', ap6);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else console.log('errore');
    }





}

const p6 = document.querySelector('#u6');
p6.addEventListener('click', ap6);

const c6 = document.querySelector('#c6');
c6.addEventListener('click', rp6);



function ap7() {

    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Broncoscopia';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    document.querySelector('#visita_non_inserita').classList.add('hidden');

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p7');
            p.classList.remove('hidden');
            i++;
            p7.removeEventListener('click', ap7);
            c7.addEventListener('click', rp7);
        } else document.querySelector('#visita_non_inserita').classList.remove('hidden');
    }


}

function rp7() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Broncoscopia';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p7');
            p.classList.add('hidden');
            i--;
            c7.removeEventListener('click', rp7);
            p7.addEventListener('click', ap7);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else console.log('errore');
    }





}

const p7 = document.querySelector('#u7');
p7.addEventListener('click', ap7);

const c7 = document.querySelector('#c7');
c7.addEventListener('click', rp7);


function ap8() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'RisonanzaMagnetica';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    document.querySelector('#visita_non_inserita').classList.add('hidden');


    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p8');
            p.classList.remove('hidden');
            i++;
            p8.removeEventListener('click', ap8);
            c8.addEventListener('click', rp8);
        } else document.querySelector('#visita_non_inserita').classList.remove('hidden');
    }


}

function rp8() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'RisonanzaMagnetica';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p8');
            p.classList.add('hidden');
            i--;
            c8.removeEventListener('click', rp8);
            p8.addEventListener('click', ap8);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else console.log('errore');
    }





}

const p8 = document.querySelector('#u8');
p8.addEventListener('click', ap8);

const c8 = document.querySelector('#c8');
c8.addEventListener('click', rp8);


function ap9() {

    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Tampone';
    fetch('/hw2/public/home/inserisci_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    document.querySelector('#visita_non_inserita').classList.add('hidden');


    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {

            preferiti.classList.remove('hidden');
            const p = document.querySelector('#p9');
            p.classList.remove('hidden');
            i++;
            p9.removeEventListener('click', ap9);
            c9.addEventListener('click', rp9);
        } else {
            document.querySelector('#visita_non_inserita').classList.remove('hidden');
            console.log('errore');
        }


    }
}

function rp9() {
    let nome_utente = document.querySelector('#nome_ut').value;
    let visita = 'Tampone';
    fetch('/hw2/public/home/rimuovi_visita/' + encodeURIComponent(nome_utente) + '/' + encodeURIComponent(visita)).then(handler).then(risolviamo);

    function handler(response) {
        const ritorno = response.text();
        return ritorno;
    }

    function risolviamo(ritorno) {
        const a = ritorno;

        if (a == 'ok') {
            const p = document.querySelector('#p9');
            p.classList.add('hidden');
            i--;
            c9.removeEventListener('click', rp9);
            p9.addEventListener('click', ap9);
            if (i == 0) { preferiti.classList.add('hidden'); }

        } else console.log('errore');
    }

}
const p9 = document.querySelector('#u9');
p9.addEventListener('click', ap9);

const c9 = document.querySelector('#c9');
c9.addEventListener('click', rp9);

/*inizio funzioni per le descrizioni(add description 1 fino a 9)
Hanno lo scopo identico ai precedenti homework di gestire l'aggiunta e rimozione delle descrizioni dall'homework
Sono invariate dai precedenti homework ma ad oggi avrei saputo sicuramente renderle più snelle e senza centinaia di righe di codice.
Per mancanza di tempo e volendomi dedicare alle parti in php dell'homework il più possibile ho deciso di riutilizzarlo
*/
function ad1() {
    let d = document.querySelector('#d1 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d1 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d1 .c');
    d.classList.remove('hidden');
}


function ad2() {
    let d = document.querySelector('#d1 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d1 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d1 .c');
    d.classList.add('hidden');
}

const d1 = document.querySelector('#d1 .b');
d1.addEventListener('click', ad1);
const d2 = document.querySelector('#d1 .c');
d2.addEventListener('click', ad2);

function ad3() {
    let d = document.querySelector('#d2 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d2 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d2 .c');
    d.classList.remove('hidden');
}

function ad4() {
    let d = document.querySelector('#d2 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d2 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d2 .c');
    d.classList.add('hidden');
}

const d3 = document.querySelector('#d2 .b');
d3.addEventListener('click', ad3);
const d4 = document.querySelector('#d2 .c');
d4.addEventListener('click', ad4);

function ad5() {
    let d = document.querySelector('#d3 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d3 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d3 .c');
    d.classList.remove('hidden');
}

function ad6() {
    let d = document.querySelector('#d3 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d3 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d3 .c');
    d.classList.add('hidden');
}

const d5 = document.querySelector('#d3 .b');
d5.addEventListener('click', ad5);
const d6 = document.querySelector('#d3 .c');
d6.addEventListener('click', ad6);

function ad7() {
    let d = document.querySelector('#d4 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d4 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d4 .c');
    d.classList.remove('hidden');
}

function ad8() {
    let d = document.querySelector('#d4 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d4 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d4 .c');
    d.classList.add('hidden');
}

const d7 = document.querySelector('#d4 .b');
d7.addEventListener('click', ad7);
const d8 = document.querySelector('#d4 .c');
d8.addEventListener('click', ad8);

function ad9() {
    let d = document.querySelector('#d5 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d5 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d5 .c');
    d.classList.remove('hidden');
}

function ad10() {
    let d = document.querySelector('#d5 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d5 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d5 .c');
    d.classList.add('hidden');
}

const d9 = document.querySelector('#d5 .b');
d9.addEventListener('click', ad9);
const d10 = document.querySelector('#d5 .c');
d10.addEventListener('click', ad10);


function ad11() {
    let d = document.querySelector('#d6 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d6 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d6 .c');
    d.classList.remove('hidden');
}

function ad12() {
    let d = document.querySelector('#d6 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d6 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d6 .c');
    d.classList.add('hidden');
}

const d11 = document.querySelector('#d6 .b');
d11.addEventListener('click', ad11);
const d12 = document.querySelector('#d6 .c');
d12.addEventListener('click', ad12);


function ad13() {
    let d = document.querySelector('#d7 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d7 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d7 .c');
    d.classList.remove('hidden');
}

function ad14() {
    let d = document.querySelector('#d7 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d7 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d7 .c');
    d.classList.add('hidden');
}

const d13 = document.querySelector('#d7 .b');
d13.addEventListener('click', ad13);
const d14 = document.querySelector('#d7 .c');
d14.addEventListener('click', ad14);


function ad15() {
    let d = document.querySelector('#d8 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d8 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d8 .c');
    d.classList.remove('hidden');
}

function ad16() {
    let d = document.querySelector('#d8 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d8 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d8 .c');
    d.classList.add('hidden');
}

const d15 = document.querySelector('#d8 .b');
d15.addEventListener('click', ad15);
const d16 = document.querySelector('#d8 .c');
d16.addEventListener('click', ad16);


function ad17() {
    let d = document.querySelector('#d9 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d9 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d9 .c');
    d.classList.remove('hidden');
}

function ad18() {
    let d = document.querySelector('#d9 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d9 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d9 .c');
    d.classList.add('hidden');
}

const d17 = document.querySelector('#d9 .b');
d17.addEventListener('click', ad17);
const d18 = document.querySelector('#d9 .c');
d18.addEventListener('click', ad18);

// parte atta a far funzionare la barra di ricerca e all'implementazione delle relative funzioni
const inputt = document.getElementById('ricerca');
inputt.addEventListener('keyup', ricerca);

function ricerca() {
    fetch("http://localhost/hw2/public/home/inizializza").then(onResponse, onError).then(trova);

    function trova(contenuti) {
        let scritta = inputt.value;

        if (contenuti[0].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#es');
            esame.classList.add('hidden');
        }
        if (contenuti[0].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#es')
            esame.classList.remove('hidden');
        }

        if (contenuti[1].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#ec');
            esame.classList.add('hidden');
        }
        if (contenuti[1].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#ec')
            esame.classList.remove('hidden');
        }

        if (contenuti[2].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#endoscopia');
            esame.classList.add('hidden');
        }
        if (contenuti[2].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#endoscopia')
            esame.classList.remove('hidden');
        }

        if (contenuti[3].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#biopsia');
            esame.classList.add('hidden');
        }
        if (contenuti[3].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#biopsia')
            esame.classList.remove('hidden');
        }

        if (contenuti[4].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#cistografia');
            esame.classList.add('hidden');
        }
        if (contenuti[4].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#cistografia')
            esame.classList.remove('hidden');
        }

        if (contenuti[5].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#calcemia');
            esame.classList.add('hidden');
        }
        if (contenuti[5].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#calcemia')
            esame.classList.remove('hidden');
        }
        if (contenuti[6].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#broncoscopia');
            esame.classList.add('hidden');
        }
        if (contenuti[6].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#broncoscopia')
            esame.classList.remove('hidden');
        }
        if (contenuti[7].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#rm');
            esame.classList.add('hidden');
        }
        if (contenuti[7].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#rm')
            esame.classList.remove('hidden');
        }
        if (contenuti[8].titolo.indexOf(scritta) == -1) {
            let esame = document.querySelector('#tampone');
            esame.classList.add('hidden');
        }
        if (contenuti[8].titolo.indexOf(scritta) >= 0) {
            let esame = document.querySelector('#tampone')
            esame.classList.remove('hidden');
        }



    }
}