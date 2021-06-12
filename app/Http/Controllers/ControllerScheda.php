<?php

use Illuminate\Routing\Controller;
use App\Models\User;
use App\Models\Visit;
use App\Models\Content;
use App\Models\Posto_auto;

class ControllerScheda extends Controller

{


public function index()
{
    $user=User::where('nome_utente',session('nome_utente'))->first(); 
    $istanza_posto_auto=Posto_auto::where('nome_utente',session('nome_utente'))->first();
  
    $ruolo=$user['ruolo'];
  
    $terapia=$user["terapia"];
    $reparto=$user["reparto"];
  


if(!isset($istanza_posto_auto['numero']) ){ $posto_auto='Nessun posto auto riservato richiesto';}else {$posto_auto=$istanza_posto_auto['numero'];}
if($ruolo=='Paz') $ruolo="Paziente";
if($ruolo=='Op') $ruolo="Operatore sanitario";
if($terapia===NULL)$terapia= 'Nessuna terapia al momento';
if($reparto===NULL)$reparto= 'Non in degenza attualmente';


return view('scheda')->with('user',$user)->with('user',$user)->with('posto_auto',$posto_auto)->with('ruolo',$ruolo)->
with('terapia',$terapia)->with('reparto',$reparto);



}


public function richiediPosto()
{
    $posto_auto=Posto_auto::where('nome_utente',session('nome_utente'))->first();
if($posto_auto==null){
Posto_auto::create(['nome_utente'=>session('nome_utente')]);
$posto_auto=Posto_auto::where('nome_utente',session('nome_utente'))->first();
return $posto_auto;}else return;




}



}