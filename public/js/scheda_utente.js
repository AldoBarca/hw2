fetch("http://localhost/hw2/public/home/inizializza").then(onResponse, onError).then(inizializza);


function inizializza(json) {
    console.log(json);
    const immagine = document.createElement('img');
    immagine.src = json[16].immagine;
    immagine.classList.add('centra');
    const container = document.querySelector('#immagine')
    if (container != null) {
        container.prepend(immagine);
        document.querySelector('.centra').addEventListener('click', richiediPosto);
    }
}

function onResponse(response) {
    if (!response.ok) { console.log('Problema con la riposta'); return null; }
    return response.json();
}

function onError(error) { console.log('Errore' + error); }




function richiediPosto() {
    fetch('/hw2/public/Scheda_utente/Richiedi_Posto_Auto').then(onResponse, onError).then(onJson);


}

function onJson(json) {
    console.log(json);

    document.querySelector('#informazione').textContent = json['numero'];
    document.querySelector('#immagine').classList.add('hidden');
    document.querySelector('#prenotazione_effettuata').classList.remove('hidden');
    document.querySelector('.centra').removeEventListener('click', richiediPosto);

}