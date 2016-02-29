<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {

  public function store(Request $request) {
    $task = Task
      ::where('line_id', $request->line_id)
      ->where('date', $request->date)
      ->where('type', $request->type)
      ->firstOrCreate();

    $task->content = $request->get('content');

    $status = $task->save() ? 200 : 400;
    return response()->json(['status' => $status], $status);
  }

}