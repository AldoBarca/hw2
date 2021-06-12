<?php

use Illuminate\Routing\Controller;
use App\Models\User;
use App\Models\Visit;
use App\Models\Content;
class ControllerHome extends Controller
{
   
public function index()
{
    $nome_utente=session('nome_utente');
    $user=User::where('nome_utente',$nome_utente)->first()->toArray();

     return view('home')->with('user',$user);
}

public function inizializza()
{
$rows=Content::all();
return $rows;


}



public function trovaPaziente ($cf)
{
$user=User::where('codice_fiscale',$cf)->first();
if($user==null){ $ris[]='nessun paziente trovato';
return $ris;}else{
return $user;}

}



public function inserisciTerapia($cf,$terapia)
{
$user=User::where('codice_fiscale',$cf)->first();
$user->terapia= $terapia;
$user->save();
return 'ok';

}




public function inserisciReparto($cf,$reparto)
{

    $user=User::where('codice_fiscale',$cf)->first();
    $user->reparto=$reparto;
    $user->save();
    return 'ok';

}


public function inserisciVisita($nome_utente,$visita)
{
    if( Visit::create([  //ritorna true se tutto va bene altrimenti false
        'nome_utente'=> $nome_utente,
        'visita'=> $visita
        ])==true){return 'ok';}else return 'errore';




}

public function rimuoviVisita($nome_utente,$visita)
{
     $user=Visit::where('nome_utente',$nome_utente)->where('visita',$visita)->first();
     $user->delete();
     return 'ok';


}



public function inizializzaVisite($nome_utente)
{
$visite=Visit::where('nome_utente',$nome_utente)->get();
if($visite==null){$visite='a';}else return $visite;
}




}



?>