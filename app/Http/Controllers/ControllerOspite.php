<?php

use Illuminate\Routing\Controller;
use App\Models\User;
use App\Models\Visit;
use App\Models\Content;
class ControllerOspite extends Controller{

    public function go_to(){

        return view('home_ospite');
    }
}