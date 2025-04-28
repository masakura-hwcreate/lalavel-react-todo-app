<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Todo;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class TodoController extends Controller
{

    public static function middleware(): array
    {
        return [
            'auth',
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::select('id', 'user_id', 'content')
            // $todos = Todo::select('id', 'user_id', 'deadline', 'content', 'is_finished')
            ->where('user_id', Auth::id())
            ->get();

        // dd($todos);
        return Inertia::render('Index', compact('todos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id', // user_idは存在するユーザーIDであることを確認
            'content' => 'required|string|max:50', // contentは必須、文字列
        ]);

        dd($request->user_id, $request->content);
        // 新しいTodoを作成
        Todo::create([
            'user_id' => $request->user_id,
            'content' => $request->content,
        ]);

        return Inertia::render('Index', compact('todos'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
