@extends('common.layouts.base')

@section('pageName', 'ライン')

@section('menu')
  @include('common.parts.menu', ['current' => 'line'])
@endsection

@section('content')
  <h3>一覧</h3>
  @if(count($lines) > 0)
    <ul>
      @foreach($lines as $line)
        <li>
          <form action="line/edit" method="post">
            <input type="hidden" name="id" value="{{$line->id}}">
            <dl>
              <dt>ID</dt>
              <dd>{{$line->id}}</dd>
              <dt>Name</dt>
              <dd><input type="text" name="name" value="{{$line->name}}"></dd>
              <dt>JIRA name</dt>
              <dd><input type="text" name="jira_name" value="{{$line->jira_name}}"></dd>
              <dt>Type</dt>
              <dd>{{$line->type}}</dd>
              <dt>Visible</dt>
              <dd>@if($line->visible) 有効 @else 無効 @endif</dd>
              <dt>アイコン URL</dt>
              <dd><input type="text" name="icon_url" value="{{$line->icon_url}}"></dd>
              <input type="submit" value="変更">
            </dl>
          </form>
        </li>
      @endforeach
    </ul>
  @else
    <p>empty</p>
  @endif

  <h3>新規追加</h3>
  <form action="/line/add" method="post">
    <dl>
      <dt>Name</dt><dd><input type="text" name="name"></dd>
      <dt>JIRA name</dt><dd><input type="text" name="jira_name"></dd>
      <dt>Type</dt><dd>
        <ul>
          <li>
            <input id="type_progress" type="radio" name="type" value="progress">
            <label for="type_progress">進捗確認対象</label>
          </li>
          <li>
            <input id="type_information" type="radio" name="type" value="information">
            <label for="type_information">情報共有対象</label>
          </li>
        </ul>
      </dd>
      <dt>アイコン URL</dt>
      <dd><input type="text" name="icon_url" value=""></dd>
    </dl>
    <input type="submit" value="追加">
  </form>
@endsection
