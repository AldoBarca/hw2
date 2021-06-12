<?php

use Illuminate\Routing\Controller;
use App\Models\User;

class LoginController extends Controller{


    public function login(){
if(session('nome_utente')!=null){
    return redirect("home");
}else
{ // Se ho un campo old nella view login ad esempio username nel caso sia errato allora devo passarlo con with.
    $old_username=Request::old('nome_utente');
    return view('login')->with('csrf_token',csrf_token())->with('old_username',$old_username);}//passaggio valori dal controller alla view


    }








    public function checkLogin()
    {$user= User::where('nome_utente',request('nome_utente'))->where('password',request('password'))->first();
        if($user!==NULL)
        {
            Session::put('nome_utente',request('nome_utente'));
            return redirect('home');
        }
        else
        {
            return redirect('login')->withInput()->with('ERRORE','ERRORE')->with('csrf_token',csrf_token());
        }

    }




    public function logout(){

        Session::flush();
        return redirect('login');
         
    }
}




?>