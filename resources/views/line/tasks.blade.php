@extends('common.layouts.base')

@section('pageName', 'タスクの一覧')

@section('menu')
    @include('common.parts.menu', ['current' => 'line'])
@endsection

@section('content')

    @if(count($tasksGroupedDate) > 0)
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
                            <p>{{$tasks['did']}}</p>
                        @endif
                    </td>
                    <td>
                        @if(isset($tasks['do']))
                            <p>{{$tasks['do']}}</p>
                        @endif
                    </td>
                </tr>
            @endforeach
        </table>
    @else
        <p>empty</p>
    @endif

@endsection
