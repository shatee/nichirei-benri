<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/nichirei', 'NichireiController@index');

Route::get('/line', 'LineController@index');
Route::post('/line/add', 'LineController@add');
Route::get('/line/{id}/tasks', 'LineController@tasks');
Route::get('/line/{id}/task', 'LineController@task');

Route::post('/task/set', 'TaskController@store');
Route::get('/tasks', 'TaskController@all');
Route::get('/task/{id}', 'TaskController@get');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
