<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  protected $table = 'tasks';

  protected $fillable = ['line_id', 'date', 'type', 'content'];
}
