@extends('layouts.master')
@section('head')
@parent
@section('stile_js')
<script src='{{url("js/script.js")}}'defer></script>
    <link rel="stylesheet" href='{{url("css/homepage.css")}}'>
@endsection
    @section('title')
    <title> Homepage utente
    </title>
    @endsection
    
   
   

@endsection
@section('header')
     
@parent     
@endsection

        @section('cartella')
 <section id='flex'><div>
     @section('benvenuto')
     <h1>Benvenuto {{$user['nome']}}! Clicca qui per la tua cartella clinica. 
</h1>
<div id='conten'></div></div></section>
@endsection



@endsection
@section('ricerca_op')

<div class="riempimento"></div> 
<section id='research'>

@if ($user['ruolo']=='Op')

       <h1 id='piccolo'> Inserendo il dato richiesto si può visualizzare e modificare la scheda di un paziente</h1>


            <form name='ricerca' id='search'>
               <p class='blue'> Inserisci il codice fiscale </p>
                <input type='text' id= 'modulo_operatore'>
                <input type='submit' value='Cerca'>


            </form> 
        @endif     
         




  
  <div class='hidden' id='no_risultati'></div>


<div class='hidden' id='dati_paziente'>
   
  <div class='container_dati'>
      <div >
            <strong>Nominativo: </strong> <p id='nominativo'></p>
      </div>

        
    </div>

  <div class='container_dati2'>

       <div id='modifica'>
        <strong> Reparto: </strong><p id='reparto'></p>
       </div>

           
  </div>
  <div class='container_dati3'>

        <div id='modify'>
          <strong>Terapia da seguire: </strong><p id='terapia'></p>
        
        </div>  

  </div>

  <div class='container_dati4' >
        <div class='hidden' id='modifica_reparto'>
        <form name='reparto' id='rep'>
               <p class='green'> Inserisci il reparto attuale del paziente:  </p>
                <input type='text' id= 'modulo_reparto'>
                <input type='submit' value='Modifica reparto'>


            </form> 
       </div>

        <div class='hidden' id='modifica_terapia'>
        <form name='terapia' id='ter'>
               <p class='green'> Inserisci la terapia da seguire: </p>
                <input type='text' id= 'modulo_terapia'>
                <input type='submit' value='Modifica terapia'>


            </form> 
        </div>  


  </div>
  <input type='hidden' id='cf_nascosto'>
<input type='hidden' id='terapia_nascosta'>
<input type='hidden' id='reparto_nascosto'>
<h3 id='ok_ter' class='hidden blue'>Terapia modificata correttamente!</h3>
<h3 id='ok_rep' class='hidden blue'>Reparto modificato correttamente!</h3>
<h3 id='problema' class='hidden red'>Errore nell'inserimento del dato.</h3>

</div>

</section>








<div class="riempimento"></div> 
@endsection
@section('preferiti')
        <section class="griglia">

            <div class="riempimento"></div>



            <section class="hidden" id="ScrittaPreferiti">

                <div>
                    <h1> Lista accertamenti medici prenotati con successo.</h1>
                </div>


                <div class="preferiti">
                    <div class="Visita hidden" id="p1">

                        <div class="pref ">
                            <strong>Esame del sangue</strong>
                            <img class="checked" id="c1" >
                        </div>
                        <div class="immagine">
                            <img  id='i1' src="">
                        </div>


                    </div>
                    <div class="Visita hidden" id="p2">
                        <div class="pref">
                            <strong>Elettrocardiogramma</strong>
                            <img class="checked" id="c2" >
                        </div>
                        <div class="immagine">
                            <img id='i2' src="">
                        </div>
                    </div>

                    <div class="Visita hidden" id="p3">
                        <div class="pref">
                            <strong>Endoscopia</strong>
                            <img class="checked" id="c3" >
                        </div>
                        <div class="immagine">
                            <img id='i3' src=""></div>


                    </div>
                </div>

                <div class="preferiti">
                    <div class="Visita hidden" id="p4">

                        <div class="pref ">
                            <strong>Biopsia</strong>
                            <img class="checked" id="c4" >
                        </div>
                        <div class="immagine">
                            <img id='i4' src="">
                        </div>


                    </div>
                    <div class="Visita hidden" id="p5">
                        <div class="pref ">
                            <strong>Cistografia</strong>
                            <img class="checked" id="c5" >
                        </div>
                        <div class="immagine">
                            <img  id='i5'src="">
                        </div>
                    </div>

                    <div class="Visita hidden" id="p6">
                        <div class="pref">
                            <strong>Calcemia</strong>
                            <img class="checked" id="c6" >
                        </div>
                        <div class="immagine">
                            <img id='i6' src=""></div>


                    </div>
                </div>

                <div class="preferiti">
                    <div class="Visita hidden" id="p7">

                        <div class="pref ">
                            <strong>Broncoscopia</strong>
                            <img class="checked" id="c7" >
                        </div>
                        <div class="immagine">
                            <img id='i7'src="">
                        </div>


                    </div>
                    <div class="Visita hidden" id="p8">
                        <div class="pref ">
                            <strong>Risonanza Magnetica</strong>
                            <img class="checked" id="c8" >
                        </div>
                        <div class="immagine">
                            <img id='i8'src="">
                        </div>
                    </div>

                    <div class="Visita hidden" id="p9">
                        <div class="pref">
                            <strong>Tampone</strong>
                            <img class="checked" id="c9" >
                        </div>
                        <div class="immagine">
                            <img id='i9' src=""></div>


                    </div>
                </div>

                <div class="blocco"></div>

            </section>
            @endsection
            @section('visite')
            <a name="visita_spec"></a>
            <div>
                <h1>Lista controlli medici da prenotare cliccando nel quadrato bianco </h1>

            </div>
            <div ><h3 class='hidden' id='visita_non_inserita'>Errore, impossibile prenotare la visita al momento. Riprova più tardi!</h3></div>
            <div class="barra">
                <em> Tutti gli elementi </em>
                <input type="text" id="ricerca">
            </div>



            <div class="flexbox">

                <div class="Visita" id="es">
                    <div class="pref" id="v1">
                        
                        <img class="unchecked" id="u1" >
                    </div>

                    <div class="immagine" id="img1">
                      
                    </div>
                    <div class="scritta" id="d1">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>
                <div class="Visita" id="ec">
                    <div class="pref" id="v2">
                        
                        <img class="unchecked" id="u2" >
                    </div>
                    <div class="immagine" id="img2">
                       
                    </div>
                    <div class="scritta" id="d2">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>
                <div class="Visita" id="endoscopia">
                    <div class="pref" id="v3">
                        
                        <img class="unchecked" id="u3" >
                    </div>
                    <div class="immagine" id="img3">  </div>
                    <div class="scritta" id="d3">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>

            </div>




            <div class="flexbox">
                <div class="Visita" id="biopsia">
                    <div class="pref" id="v4">
                        
                        <img class="unchecked" id="u4" >
                    </div>
                    <div class="immagine" id="img4">
                       </div>
                    <div class="scritta" id="d4">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>
                <div class="Visita" id="cistografia">
                    <div class="pref" id="v5">
                      
                        <img class="unchecked" id="u5" >
                    </div>
                    <div class="immagine" id="img5"> </div>
                    <div class="scritta" id="d5">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>
                <div class="Visita" id="calcemia">
                    <div class="pref" id="v6">
                        
                        <img class="unchecked" id="u6" >
                    </div>
                    <div class="immagine" id="img6">
                      
                    </div>
                    <div class="scritta" id="d6">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>

            </div>



            <div class="flexbox" id="ultimaFlex">

                <div class="Visita" id="broncoscopia">
                    <div class="pref" id="v7">
                        
                        <img class="unchecked" id="u7" >
                    </div>
                    <div class="immagine" id="img7">
                     </div>
                    <div class="scritta" id="d7">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>
                <div class="Visita" id="rm">
                    <div class="pref" id="v8">
                        
                        <img class="unchecked" id="u8" >
                    </div>
                    <div class="immagine" id="img8">
                       </div>
                    <div class="scritta" id="d8">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>
                <div class="Visita" id="tampone">
                    <div class="pref" id="v9">
                        
                        <img class="unchecked" id="u9" >
                    </div>
                    <div class="immagine" id="img9">
                       </div>
                    <div class="scritta" id="d9">
                        <p class="b">Clicca per più dettagli</p>
                        <p class="hidden c">Clicca per meno dettagli</p>
                    </div>
                </div>
            </div>







        </section>
@endsection
@section('sezione1')
@parent
        
        @endsection
    @section('sezione2')
    @parent
        
        @endsection
     @section('alimentazione')
     @parent
      
@endsection
@section('covid')
@parent
        
@endsection
        



@section('aggiornamenti')
@parent
    
@endsection

@section('footer')
@parent
@section('logout')
<input type='hidden' name='nome_nascosto' id='nome_ut' value='{{$user["nome_utente"]}}'>
<a href='/hw2/public/logout'>Logout</a> 
@endsection
        
@endsection
@section('end')  
    @endsection