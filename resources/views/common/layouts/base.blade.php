<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>日例便利 - @yield('pageName')</title>

  <link rel="stylesheet" href="/css/base.css">
  @yield('headBottom')
</head>
<body>
<div class="container">
  <h1>日例便利</h1>

  @yield('menu')

  <h2>@yield('pageName')</h2>

  <div class="content">
    @yield('content')
  </div>
</div>
@yield('bodyBottom')
</body>
</html>
