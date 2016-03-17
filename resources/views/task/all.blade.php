@extends('common.layouts.base')

@section('pageName', 'タスクの一覧')

@section('menu')
    @include('common.parts.menu', ['current' => 'task'])
@endsection

@section('content')

    <table>
    <tr>
        <td>&nbsp;</td>
        @foreach($lines as $line)
            <th>{{$line['name']}}</th>
        @endforeach
    </tr>
    @foreach($tasksGrouped as $date => $tasksGroupedLine)
        <tr>
            <th>{{$date}}</th>
            @foreach($lines as $line)
                <td>
                    @if($line['type'] == 'information' && isset($tasksGroupedLine[$line['id']]))
                        <h4>情報</h4>
                        @if(isset($tasksGroupedLine[$line['id']]['information']))
                            <pre>{{$tasksGroupedLine[$line['id']]['information']}}</pre>
                        @endif

                    @elseif($line['type'] == 'progress' && isset($tasksGroupedLine[$line['id']]))
                        <h4>やったこと</h4>
                        @if(isset($tasksGroupedLine[$line['id']]['did']))
                            <pre>{{$tasksGroupedLine[$line['id']]['did']}}</pre>
                        @endif
                        <h4>やること</h4>
                        @if(isset($tasksGroupedLine[$line['id']]['do']))
                            <pre>{{$tasksGroupedLine[$line['id']]['do']}}</pre>
                        @endif
                    @endif
                </td>
            @endforeach
        </tr>
    @endforeach
    </table>

@endsection

