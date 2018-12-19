@extends('common.layouts.base')

@section('pageName', 'タスクの一覧')

@section('menu')
    @include('common.parts.menu', ['current' => 'line'])
@endsection

@section('content')

    <p>Name: {{$line['name']}}</p>
    @if($line['icon_url'])
        <div><img src="{{$line['icon_url']}}"></div>
    @endif

    @if(count($tasksGroupedDate) > 0)
        @if($line['type'] == 'information')
            <table>
                <tr>
                    <th>日付</th>
                    <th>情報</th>
                </tr>
                @foreach($tasksGroupedDate as $date => $tasks)
                    <tr>
                        <td>{{$date}}</td>
                        <td>
                            @if(isset($tasks['information']))
                                <pre>{{$tasks['information']}}</pre>
                            @endif
                        </td>
                    </tr>
                @endforeach
            </table>
        @elseif($line['type'] == 'progress' && isset($tasksGroupedLine[$line['id']]))
            <table>
                <tr>
                    <th>日付</th>
                    <th>やったこと</th>
                    <th>やること</th>
                </tr>
                @foreach($tasksGroupedDate as $date => $tasks)
                    <tr>
                        <td>{{$date}}</td>
                        <td>
                            @if(isset($tasks['did']))
                                <pre>{{$tasks['did']}}</pre>
                            @endif
                        </td>
                        <td>
                            @if(isset($tasks['do']))
                                <pre>{{$tasks['do']}}</pre>
                            @endif
                        </td>
                    </tr>
                @endforeach
            </table>
        @endif
    @else
        <p>empty</p>
    @endif

@endsection
