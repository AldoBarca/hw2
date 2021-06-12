<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/Scheda_utente.css">
    <script src='{{url("js/scheda_utente.js")}}'defer></script>
    <title>Scheda {{$user['ruolo']}}  {{$user['nome']}} {{$user['cognome']}} </title>
</head>


<body>

    <article>
        <header>
        <h1> Dati personali </h1>  
        </header>

<section>
<div class='flex'id='nom'>
<div class='riga'><strong>Nome:  </strong> <p> &nbsp;  {{$user['nome']}} </p></div>
<div class='riga'><strong>Cognome:</strong>  <p>  &nbsp; {{$user['cognome']}} </p> </div>
</div>

<div class='flex' id='cf'>
<div  class='riga'><strong>Codice Fiscale: </strong> <p> &nbsp;  {{$user['codice_fiscale']}} </p></div>
</div>

<div class='flex' id='f3'>
<div  class='riga'><strong>Genere: </strong> <p> &nbsp;  {{$user['genere']}}  </p></div>
<div  class='riga'><strong>Ruolo:</strong> <p>  &nbsp; {{$ruolo}}  </p> </div>
</div>


<div class='flex' id='f4'>

<div  class='riga'><strong>Terapia: </strong> <p> &nbsp;  {{$terapia}} </p></div>
<div  class='riga'><strong>Reparto:</strong>  <p>  &nbsp; {{$reparto}} </p> </div>

</div>



@if($ruolo=='Operatore sanitario')  <div class='flex' id='posto'><div class='riga' id='scritta_posto'>
<strong>Posto auto: </strong> <p id='informazione'> &nbsp;  {{$posto_auto}} </p></div>
</div>
@if($posto_auto=='Nessun posto auto riservato richiesto')<div id='immagine'>
    <div class='riga' id='sponsor'>Clicca sulla macchina per prenotare un posto auto!</div></div>

@endif
@endif
<h5 class='hidden' id='prenotazione_effettuata'>Prenotazione posto auto effettuata con successo!</h5>







<div class='flex'>
<div id='stile'><a href='home' id='home'>Torna alla pagina principale</a></div>
</div>

</section>



    </article>
</body>
</html>

