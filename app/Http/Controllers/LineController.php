<?php

namespace App\Http\Controllers;

use App\Line;
use App\Task;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class LineController extends Controller {

  const STATUS_ADDED = 'added';

  private static $validateRules = [
    'name' => 'required|unique:lines',
    'jira_name' => 'unique:lines',
  ];

  public function index() {
    $lines = Line::all();
    return view('line.index', [
      'lines' => $lines
    ]);
  }

  public function add(Request $request) {
    $this->validate($request, self::$validateRules);

    $maxListOrder = Line::all()->max('list_order');

    $line = new Line();
    $line->name = $request->name;
    $line->jira_name = $request->jira_name;
    $line->type = $request->type;
    $line->list_order = $maxListOrder + 1;
    $line->icon_url = $request->icon_url;
    if (!$line->save()) {
      throw new \RuntimeException('?');
    }
    return redirect('line')->with('status', self::STATUS_ADDED);
  }

  public function tasks($id) {
    $line = Line::find($id);
    $tasksGroupedDate = Task::getGroupedDateByLineId($id);
    usort($tasksGroupedDate, function($a, $b) {
      if ($a['date'] === $b['date']) {
        return 0;
      }
      return ($a['date'] < $b['date']) ? 1 : -1;
    });

    return view('line.tasks', [
      'line' => $line,
      'tasksGroupedDate' => $tasksGroupedDate,
    ]);
  }

}
