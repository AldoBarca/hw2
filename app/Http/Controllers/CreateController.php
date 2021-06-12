<?php

use Illuminate\Routing\Controller;
class CreateController extends Controller{


    public function index()
    {
        $user=User::find(session('user_id'));
        return view( 'create')->with('user',$user);
    }
//API
    public function Api($query){
    $json=Http::get('http/sitoApi',[
    'q'=> $query,
    'api_key'=>env('X_API_KEY'),
    'limit'=>30
    ]);
if($json->failed()){ abort(500);}

$newJson=array();
for($i=0;$i<count($json['data']);$i++)
{
    $newJson[]=array(
        'id'=>$json['data'][$i]['id'] );
        return $newJson;
}}


public function createRoba($json){
$result=Post::create([

    'content'=>$json,
    'type'=>'GIF'
]);
return ['ok'=>$result];
}

public function robaSpotify($query){

$token=Http::withHeaders([
'Authorization'=>'Basic'.base64_encode(env('SPOTIFY_CLIENT_ID').':'.env('SPOTIFY_CLIENT_SECRET')),


])->POST('Url_endpoint/api/token',['grant_type'=>'client_credentials']);
if($token->failed()) abort(500); 
}


}


?>