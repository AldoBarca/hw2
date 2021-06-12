<?php
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model{
   
   protected $primaryKey = 'visit_id';
   protected $fillable = [
    'nome_utente',
    'visita'
];

    public function users(){

        return $this->hasMany("App\Models\User");

    } 

}





?>