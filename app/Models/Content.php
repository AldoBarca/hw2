<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;


class Content extends Authenticatable
{
    protected $fillable = [
        'nome',
        'password',
        'cognome',
        'ruolo',
        'nome_utente',
        'codice_fiscale',
        'genere'
    ];

public $timestamps=false;
    









}


?>