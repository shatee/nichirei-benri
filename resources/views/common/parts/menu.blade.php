<?php
$menu = [
  'nichirei' => '日例',
  'line' => 'ライン',
];
?>
<div class="menu">
  <ul>
    @foreach($menu as $id => $name)
      <?php $active = ($id == $current) ? 'active' : '' ?>
      <li class="{{$active}}"><a href="/{{$id}}">{{$name}}</a></li>
    @endforeach
  </ul>
</div>