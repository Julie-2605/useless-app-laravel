<?php

use App\Http\Controllers\ThingController;
use Illuminate\Support\Facades\Route;

//Things - Drag & Drop
Route::get('/things', [ThingController::class, 'index']);
Route::post('/things/order', [ThingController::class, 'updateOrder']);
Route::post('/things/shuffle', [ThingController::class, 'shuffle']);