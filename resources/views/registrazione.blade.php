<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href='{{url("css/registrazione.css")}}'>
    <script src='{{ url("js/registrazione.js")}}' defer></script>
    <title>Benvenuto! Crea il tuo account</title>
</head>




<body>
    
    <article>
        <header>
            
            <h1> Registrati qui! </h1>
        </header>
    <div class="p_iniziale">
            

            <section>
                <div class id="regi" class="registrazione">


                    <form name='registrazione' id='registrazione' method='post' >
                    <input type='hidden' name='_token' value='{{$csrf_token}}'>
                        <label>Nome:<input type= 'text' name= 'nome' id='nom' value='{{$vecchio_nome}}'></label>
                        <label> Cognome:<input type='text' name='cognome' id='cogn' value='{{$vecchio_cognome}}'></label>
                        <label id='cf'>Codice Fiscale:<input type='text' name='codf' id='codf' value='{{$vecchio_cf}}'></label>
                        <div>
                            <p class="al">Sesso:</p>
                            <label><input type='radio' name='genere' value='m' id='uomo'>Uomo </label>
                            <label><input type='radio' name='genere' value='f' id='donna'>Donna</label>
                        </div>

                        <div>
                            <p class="ar">Ruolo:</p>
                            <label><input type='radio' name='ruolo' value='Op' id='op'>Oper.San</label>
                            <label><input type='radio' name='ruolo' value='Paz' id='paz'> Paziente</label>
                        </div>
                        
                        <label id="nomm">Nome utente: <input type='text' name='nome_utente_reg' id='nome_u' value='{{$vecchio_nu}}'></label>
                        <label> Password:<input type='password' name='password_reg' id='pw'></label>
                       

                        <label for='ok'><p id="acc">Acconsento al trattamento dei dati personali</p> </label>
                        <label><input type='checkbox' name='ok' id='permesso'></label>
                        <label> &nbsp;<input name='registrazione' type='submit' value='Iscriviti'></label>

                        <a href='/hw2/public/login'  id='to_login'> Torna al login </a>
                    </form>
                  
                </div>
                
                    <h3 class='hidden' id='errore1'>La password e il codice fiscale devono contenere tra i 5 e 16 caratteri. </h3>
                    <h3 class='hidden' id='errore2'>Bisogna compilare tutti i campi! </h3>
                    <h3 class='hidden' id='errore3'>Per creare un account si deve accettare il trattamento dei dati.</h3>
                    <h3 class='hidden' id='errore4'>Account con questo nome utente già esistente.</h3>
                    <h3 class='hidden' id='errore5'>Già presente un account associato al codice fiscale.</h3>
                   
                    
                   
            </section>
           
    
      </div>


        <footer>


            <a id='rassicurazione'>I dati inseriti da te sono al sicuro e solo tu puoi accedervi!</a>
        </footer>
    </article>
</body>


</html>


