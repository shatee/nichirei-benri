<?php

namespace App\Http\Controllers;

use App\Line;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {

  public function get(Request $request) {
    $task = Task::where('id', $request->id)->first();
    if ($task) {
      return response()->json(['status' => 200, 'task' => $task]);
    } else {
      return response()->json(['status' => 404], 404);
    }
  }

  public function store(Request $request) {
    $date = new \DateTime($request->date);
    $task = Task::firstOrNew([
      'line_id' => $request->line_id,
      'date' => $date->format('Y-m-d'),
      'type' => $request->type,
    ]);

    header('task: ' . json_encode($task));
    header('task_: ' . $task->revision . ' ' . $request->current_revision);
    // すでにタスクが存在し、 revision が進んでいれば conflict
    if ($task->revision > $request->current_revision) {
      return response()->json(['status' => 409, 'task' => $task], 409);
    }

    $task->content = $this->formatContentForStore($request->get('content'));
    $task->revision ++;

    $status = $task->save() ? 200 : 400;
    return response()->json(['status' => $status], $status);
  }

  public function all() {
    $lines = Line::all();
    $tasksGrouped = array_reverse(Task::getGroupedDateAndLineId());

    return view('task.all', [
      'lines' => $lines,
      'tasksGrouped' => $tasksGrouped,
    ]);
  }

  private function formatContentForStore($content) {
    return strtr($content, ['&#34;' => '"']);
  }
}

