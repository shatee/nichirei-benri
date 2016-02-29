@extends('common.layouts.base')

@section('pageName', '日例')

@section('headBottom')
  <link rel="stylesheet" href="css/nichirei.css">
@endsection

@section('menu')
  @include('common.parts.menu', ['current' => 'nichirei'])
@endsection

@section('content')
  <div
    class="data-container"
    data-lines="{{ json_encode($lines) }}"
    data-tasks="{{ json_encode($tasks) }}"
    data-date-start="{{ $dateStart->format('Y-m-d') }}"
    data-date-end="{{ $dateEnd->format('Y-m-d') }}"
  ></div>
@endsection

@section('bodyBottom')
  <script type="application/javascript" src="js/nichirei.js"></script>
@endsection
