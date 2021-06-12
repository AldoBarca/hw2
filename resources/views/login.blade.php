<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href='{{url("css/login.css")}}'>
    <script src='{{ url("js/login.js")}}' defer></script>
    <title>Benvenuto! Inserisci i tuoi dati</title>
</head>


<body>
    
    <article>
        <header>
            <h1 > Inserisci i tuoi dati per accedere!</h1>
            
        </header>
    <div class="p_iniziale">
            <section>
                <div class="login" id="log">
                        
                        <form name='form_login'  id='form_login' method='post'>
                           <input type='hidden' name='_token' value='{{$csrf_token}}'>
                            
                            <label>Nome utente: <input type= 'text' name= 'nome_utente' id='nome_utente' value='{{$old_username}}'></label>
                            <label > <div class='a'>Password: </div><input type='password' name='password' id='password'></label>
                            <label > &nbsp;<input id='b' class='submit' value='Accedi' name='login' type='submit'></label>
                            
                        </form>
                            <h3 class='hidden' id='errore_login'>Inserisci dei dati. </h3>
                            <h3 class='hidden' id="cred_sbagliate"> Credenziali sbagliate. </h3>
                            @if (session()->has('ok')) <h3 id='successo'>Registrazione effettuata con successo!</h3>
                            @endif

                            @if(session()->has('ERRORE')) <h3> I dati inseriti sono sbagliati. </h3>
                            @endif
                            <div id='stile'><a href="/hw2/public/registrazione" id='reg'>Non hai un account? Registrati ora!</a></div>

                            
                   
                </div>
            </section>

            
           
    
      </div>


        <footer>


            <a id='sponsor' href="/hw2/public/ospite">Accedi comunque alla pagina del nostro Ospedale da ospite!</a>
        </footer>
    </article>
</body>


</html>
