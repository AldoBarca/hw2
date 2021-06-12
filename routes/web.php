<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/login');

});

Route::get('/login', 'LoginController@login')->name('login');//
Route::post('/login','LoginController@checkLogin');
Route::get('/login/nome_utente/{q}','LoginController@checkUsername');

Route::get('/logout','LoginController@logout')->name('logout');

Route::get('/registrazione','ControllerRegi@index');
Route::post('/registrazione','ControllerRegi@createUtente')->name('login');
Route::get('/registrazione/nome_utente/{q}','ControllerRegi@checkUsername');
Route::get('/registrazione/codice_fiscale/{q}','ControllerRegi@checkCf');

Route::get('/Scheda_utente','ControllerScheda@index');
Route::get('/Scheda_utente/Richiedi_Posto_Auto','ControllerScheda@richiediPosto');

Route::get('/ospite','ControllerOspite@go_to');

Route::get('/home','ControllerHome@index');
Route::get('/home/inizializza','ControllerHome@inizializza');

Route::get('/home/trova_paziente/{cf}','ControllerHome@trovaPaziente');
Route::get('/home/inserisci_reparto/{cf}/{reparto}','ControllerHome@inserisciReparto');
Route::get('/home/inserisci_terapia/{cf}/{terapia}','ControllerHome@inserisciTerapia');

Route::get('/home/inizializza_visite/{nome_utente}','ControllerHome@inizializzaVisite');
Route::get('/home/inserisci_visita/{nome_utente}/{visita}','ControllerHome@inserisciVisita');
Route::get('/home/rimuovi_visita/{nome_utente}/{visita}','ControllerHome@rimuoviVisita');


Route::get('/Api/{query}','ControllerApi@alimento');
Route::get('/Api_nazioni/{query}','ControllerApi@aggiornamento_nazione');

Route::get('/CreateRoba/{json}','CreateController@CreateRoba');