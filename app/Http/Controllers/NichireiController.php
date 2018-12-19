<?php

namespace App\Http\Controllers;

use App\Line;
use App\Task;
use Illuminate\Database\Eloquent\Collection;

use App\Http\Requests;

class NichireiController extends Controller {

  const START_DAY = -7;
  const END_DAY = 7;

  public function index() {
    /** @var Collection $lines */
    $lines = Line::where('visible', true)
      ->orderBy('list_order', 'asc')
      ->get();

    $lineIds = array_map(function ($line) {
      return $line['id'];
    }, $lines->all());

    $dateStart = new \DateTime('-4 day');
    $dateEnd = new \DateTime('+4 day');
    $tasks = Task::whereIn('line_id', $lineIds)
      ->whereBetween('date', [$dateStart->format('Y-m-d'), $dateEnd->format('Y-m-d')])
      ->get();

    return view('nichirei.index', [
      'lines' => $lines,
      'tasks' => $tasks,
      'dateStart' => $dateStart,
      'dateEnd' => $dateEnd,
    ]);
  }

}
