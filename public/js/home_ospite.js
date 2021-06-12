function inizializza(json) {

    console.log(json);



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





function onResponse(response) {
    if (!response.ok) { console.log('Problema con la riposta'); return null; }
    return response.json();
}

function onError(error) { console.log('Errore' + error); }

let url = "https://api.quarantine.country/api/v1/summary/region?region=italy";
fetch(url).then(onResponse, onError).then(onJson);

function onJson(json) {
    if (!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);
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