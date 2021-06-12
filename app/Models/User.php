<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
  protected $primaryKey = 'user_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome',
        'password',
        'cognome',
        'ruolo',
        'nome_utente',
        'codice_fiscale',
        'genere'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];

   
    

public function visits(){

    return $this->hasMany("App\Models\Visit");
}

public function posto_autos(){

    return $this->hasOne("App\Models\Posto_auto");
}


}
