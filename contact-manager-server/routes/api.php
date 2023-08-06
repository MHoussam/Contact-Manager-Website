<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\WhereController;
use Illuminate\Support\Facades\Auth;

//Route::group(["middleware"=>"auth:api"],function(){
    //$user = Auth::user();

    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('/a', [WhereController::class, 'write']);
    Route::get('displayContacts/{contact_id?}', [WhereController::class, 'displayContacts']);
    Route::post('addContact', [WhereController::class, 'addContact']);
//});

Route::post('login', [AuthController::class, 'login']);
//Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");