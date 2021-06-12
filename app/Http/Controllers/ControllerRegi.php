<?php


use Illuminate\Routing\Controller;
use App\Models\User;
class ControllerRegi extends Controller
{
public function createUtente()
{
    $request=request();
    echo $request->codf;

    if( User::create([  
    'nome_utente'=> $request->nome_utente_reg,
    'codice_fiscale'=> $request->codf,
    'nome'=> $request->nome,
    'cognome'=> $request->cognome,
    'ruolo'=> $request->ruolo,
    'genere'=> $request->genere,
    'password'=> $request->password_reg
   
    ])==true) {  return redirect('login')->with('ok','ok')->with('csrf_token',csrf_token())->with('old_username',''); }
    else{
        $vecchio_nu=$request->nome_utente_reg;
        $vecchio_nome=$request->nome;
        $vecchio_cognome=$request->cognome;
        $vecchio_cf=$request->codf;
   
        return view('registrazione')->with('vecchio_nome',$vecchio_nome)->with('vecchio_cognome',$vecchio_cognome)->with('vecchio_cf',$vecchio_cf)
        ->with('vecchio_nu',$vecchio_nu)->with('csrf_token',csrf_token());
    
    };
}
  

public function checkCf($cf)
{
    $exist=User::where('codice_fiscale',$cf)->first();
    if($exist!==NULL){ return 'cf_utilizzato';
    }else{ 
        
        
        return 'ok';}
    
}


public function checkUsername($nome_utente)
{   
    $exist=User::where('nome_utente',$nome_utente)->first();
    if($exist!==NULL){return 'nome_utente_utilizzato';
    }else{ 
        
        
        return 'ok';}
    
}


public function index()
{    $request=request();
    $vecchio_nu=$request->nome_utente_reg;
        $vecchio_nome=$request->nome;
        $vecchio_cognome=$request->cognome;
        $vecchio_cf=$request->codf;
return view('registrazione')->with('vecchio_nome',$vecchio_nome)->with('vecchio_cognome',$vecchio_cognome)->with('vecchio_cf',$vecchio_cf)
->with('vecchio_nu',$vecchio_nu)->with('csrf_token',csrf_token());
}









}





?>