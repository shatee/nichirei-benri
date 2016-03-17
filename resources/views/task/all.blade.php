@extends('common.layouts.base')

@section('pageName', 'タスクの一覧')

@section('menu')
    @include('common.parts.menu', ['current' => 'task'])
@endsection

@section('content')

    <table>
    <tr>
        <td>&nbsp;</td>
        @foreach($lines as $line) {
            <th>{{$line['name']}}</th>
        @endforeach
    </tr>
    @foreach($tasksGrouped as $date => $tasksGroupedLine)
        <tr>
            <th>{{$date}}</th>
            @foreach($lines as $line) {
                <td>
                @if($line['type'] == 'information')
                    <pre>
                        @if(isset($tasksGroupedLine[$line]['information']))
                            {{$tasksGroupedLine[$line]['information']}}
                        @endif
                    </pre>
                @else
                    <pre>
                        @if(isset($tasksGroupedLine[$line]['did']))
                            {{$tasksGroupedLine[$line]['did']}}
                        @endif
                    </pre>
                    <pre>
                        @if(isset($tasksGroupedLine[$line]['do']))
                            {{$tasksGroupedLine[$line]['do']}}
                        @endif
                    </pre>
                @endif
                </td>
            @endforeach
        </tr>
    @endforeach
    </table>

@endsection
