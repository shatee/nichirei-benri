<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  protected $table = 'tasks';

  protected $fillable = ['line_id', 'date', 'type', 'content', 'revision'];

  public static function getGroupedDateByLineId($lineId) {
    $tasks = Task::where('line_id', $lineId)->orderBy('date')->get();
    $tasksGroupedDate = [];
    foreach ($tasks as $task) {
      $tasksGroupedDate[$task->date][$task->type] = $task->content;
    }
    return $tasksGroupedDate;
  }

  public static function getGroupedDateAndLineId() {
    $tasks = Task::orderBy('date')->get();
    $tasksGrouped = [];
    foreach ($tasks as $task) {
      $tasksGrouped[$task->date][$task->line_id][$task->type] = $task->content;
    }
    return $tasksGrouped;
  }
}
