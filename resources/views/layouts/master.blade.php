@section('head')

<html>

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap" rel="stylesheet">
    <link rel="https://fonts.google.com/share?selection.family=Roboto:ital,wght@1,300" rel="stylesheet">
   
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap" rel="stylesheet">
    @yield('stile_js')
    

   @section('title') <title> Homepage generica
    </title>

    @show
   
    </head>
    @show
    @section('header')
 <body>
    <article>
  
        <header>

            <nav>
                <div class="navbar">
                    <a href="#chi_siamo"> Chi siamo </a>
                    <a href="#visita_spec">Prenota una visita specialistica!</a>
                    <a href="#novità">Novità</a>
                    <a href="#logout">Torna al login</a>

                </div>
            </nav>

            <h1> Ospedale regionale di Sicilia</h1>
            <div class="overlay"></div>
        </header>

        <div class="riempimento"></div> 
@show

@yield('cartella')  
     @yield('benvenuto')   
<div id='conten'></div></div></section>
    





@yield('ricerca_op')


@yield('preferiti')


@yield('visite')


@section('sezione1')
<a name="chi_siamo"></a>


<h1>Chi siamo?</h1>

<section class="section1">

            <div class="img1">

              
            </div>
            <div class="img2">

               
            </div>

        </section>

        <div class="riempimento" id="spazio"></div>
    @show
        @section('sezione2')
        <section class="section2">
            <div id='foto3'></div>

            <p class="paragrafo3">
                <div class='blu'>I nostri reparti:</div>
                </br>
                <div class="reparti">
                    <div>Anestesia-Referente:
                        <p> Maria Rossi</p>
                    </div>

                    </br>
                    <div>Cardiologia-Referente :
                        <p> Mario Viola </p>
                    </div>


                    </br>
                    <div>Chirurgia-Referente:
                        <p> Luigi Verdi </p>
                    </div>

                    </br>
                    <div> Day Hospital-Referente:
                        <p> Maria Verdi </p>
                    </div>

                    </br>
                    <div>Neurologia-Referente:
                        <p> Luigi Rossi </p>
                    </div>

                    </br>
                </div>
            </p>
        </section>
     @show

       @section('alimenti')
     <div class="titolo">
            <h3>Salute uguale alimentazione corretta, trova i valori nutritivi di un alimento</h3>
        </div>
        <div class="form">

<form name='alimenti' method='get' id='get_kcal'>
    Inserisci un alimento(in inglese)
    <input type="text" id="alimento" name='alimento'>
    <input type="submit" value="Cerca">


</form>
</div>
<div class='nutrimenti hidden'>
<h3 class='hidden' id='kcal_alimento'></h3>
<h5 class='hidden'  id='descr_kcal'>Le chilocalorie(kcal) sono un'unità di misura derivata dell'energia che indica quanto un alimento fornisce
nutrimento al nostro corpo.</h5>
<p class='hidden'  id='show_kcal'>Mostra più informazioni</p>
<p class='hidden'  id='hide_kcal'>Mostra meno</p>


<h3 class='hidden' id='vitamina_c'></h3>
<h5 class='hidden'  id='descr_c'>La vitamina c è fondamentale per la salute, infatti ha la funzione di innalzare le barriere del sistema immunitario e prevenire l'insorgenza di molte patologie.
</h5>
<p class='hidden'  id='show_c'>Mostra più informazioni</p>
<p class='hidden'  id='hide_c'>Mostra meno</p>


<h3 class='hidden' id='carboidrati'></h3>
<h5 class='hidden'  id='descr_carboidrati'>I carboidrati sono la prima fonte di energia e possono essere utilizzati
 sia subito sia come riserva energetica.</h5>
<p class='hidden'  id='show_carboidrati'>Mostra più informazioni</p>
<p class='hidden'  id='hide_carboidrati'>Mostra meno</p>


<h3 class='hidden' id='proteine'></h3>
<h5 class='hidden'  id='descr_proteine'>Le proteine sono essenziali per la nostra salute, permettono al sistema immunitario
 di avere un funzionamento ottimale e aiutano la crescita muscolare.</h5>
<p class='hidden'  id='show_proteine'>Mostra più informazioni</p>
<p class='hidden'  id='hide_proteine'>Mostra meno</p>


<h3 class='hidden' id='potassio'></h3>
<h5 class='hidden'  id='descr_potassio'>Il potassio è estremamente importante in quanto regola l'equilibrio del corpo e anche
 i processi metabolici di molti nutrienti fondamentali come i carboidrati.</h5>
<p class='hidden'  id='show_potassio'>Mostra più informazioni</p>
<p class='hidden'  id='hide_potassio'>Mostra meno</p>


</div>



<div class="riempimento" id="spazio"></div>




@show

@section('covid')
        <div class="titolo">
            <h3>Resta aggiornato sui dati covid di ogni nazione</h3>
        </div>
        <div class="form" id='agg_cov'>

            <form name='aggiornamenti'>
                Inserisci una nazione
                <input type="text" id="nazione">
                <input type="submit" value="Cerca">


            </form>
            <div class="hidden" id="risultati">


            </div>

        </div>
        <div class="riempimento" id="spazio"></div> 
@show
        



@section('aggiornamenti')

        <div class="Api">
            <a name="novità"></a>
            <h3>Aggiornamenti Covid19 Italia</h3>
            <div class="Api1" id="CovidNews">

            </div>
            <div class="Api2">

            </div>
           
        </div>
      


@show
@section('footer')   <a name="logout"></a>
      <footer id='footer'>
            <p>Sito di un ipotetico plesso ospedaliero creato da Aldo Barca (O46002236) partendo dal progetto di database sullo stesso.</p>
         @section('logout') <a href='/hw2/public/logout'>Logout</a> @show
         
        </footer>
        @show
        @section('end')
    </article>
</body>




</html>  
@endsection