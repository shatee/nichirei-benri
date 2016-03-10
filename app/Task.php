<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  protected $table = 'tasks';

  protected $fillable = ['line_id', 'date', 'type', 'content'];

  public static function getGroupedDateByLineId($lineId) {
    $tasks = Task::where('line_id', $lineId)->orderBy('date')->get();
    $tasksGroupedDate = [];
    foreach ($tasks as $task) {
      $tasksGroupedDate[$task->date][$task->type] = $task->content;
    }
    return $tasksGroupedDate;
  }
}
