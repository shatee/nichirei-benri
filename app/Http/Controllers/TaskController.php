<?php

namespace App\Http\Controllers;

use App\Line;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {

  public function store(Request $request) {
    $date = new \DateTime($request->date);
    $task = Task::firstOrNew([
      'line_id' => $request->line_id,
      'date' => $date->format('Y-m-d'),
      'type' => $request->type,
    ]);

    $task->content = $this->formatContentForStore($request->get('content'));

    $status = $task->save() ? 200 : 400;
    return response()->json(['status' => $status], $status);
  }

  public function all() {
    $lines = Line::all();
    $tasksGrouped = Task::getGroupedDateAndLineId();

    return view('task.all', [
      'lines' => $lines,
      'tasksGrouped' => $tasksGrouped,
    ]);
  }

  private function formatContentForStore($content) {
    return strtr($content, ['&#34;' => '"']);
  }
}

