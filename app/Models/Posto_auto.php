<?php
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Posto_auto extends Model{

    protected $table='posto_auto';
    protected $primaryKey = 'numero';

    protected $fillable = [
        'nome_utente'
       
    ];


    public function user(){

        return $this->belongsTo("App\Models\User");

    } }
?>