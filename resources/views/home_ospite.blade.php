@extends('layouts.master')

@section('head')
@parent
@section('stile_js')
<script src='{{url("js/home_ospite.js")}}'defer></script>
    <link rel="stylesheet" href='{{url("css/homepage.css")}}'>
@endsection

    @section('title')
    <title> Homepage ospite Ospedale 
    </title>
    @endsection
    
   
   

@endsection
@section('header')
     
@parent     
@endsection


@section('sezione1')
@parent
        
@endsection

@section('sezione2')
@parent
        
        @endsection
     @section('alimentazione')
     @parent
      
@endsection
@section('covid')
@parent
        
@endsection
        



@section('aggiornamenti')
@parent
    
@endsection

@section('footer')
@parent
@section('logout')
<a id='to_login_non_registrato' href='/hw2/public/logout'>Torna al login</a> 
@endsection
        
@endsection
@section('end')  
    @endsection