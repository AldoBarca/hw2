<?php

use Illuminate\Routing\Controller;

class ControllerApi extends Controller
{

function aggiornamento_nazione($query){
   
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://covid-19-data.p.rapidapi.com/country?name=" .$query,
        CURLOPT_RETURNTRANSFER => true,
        
        
        CURLOPT_MAXREDIRS => 10,
        
        CURLOPT_HTTPHEADER => [
            "x-rapidapi-host: covid-19-data.p.rapidapi.com",
            "x-rapidapi-key: ".env('API_KEY_ALIMENTI')
        ],
    ]);
    
    
    $json=curl_exec($curl);
    return $json;
    

}




function alimento($query){
 
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" .$query,
        CURLOPT_RETURNTRANSFER => true,
        
        
        CURLOPT_MAXREDIRS => 100,
        
        CURLOPT_HTTPHEADER => [
            "x-rapidapi-host: food-calorie-data-search.p.rapidapi.com",
            "x-rapidapi-key: ".env('API_KEY_ALIMENTI')
        ],
    ]);
    
    
    $risultato=curl_exec($curl);
    return $risultato;
    


}



}