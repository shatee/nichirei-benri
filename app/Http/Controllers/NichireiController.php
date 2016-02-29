<?php

namespace App\Http\Controllers;

use App\Line;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class NichireiController extends Controller {

  public function index() {
    /** @var Collection $lines */
    $lines = Line::where('visible', true)
      ->get();

    $lineIds = array_map(function ($line) {
      return $line['id'];
    }, $lines->all());

    $dateStart = new \DateTime('-4 day');
    $dateEnd = new \DateTime('+4 day');
    $tasks = Line::whereIn('line_id', $lineIds)
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
