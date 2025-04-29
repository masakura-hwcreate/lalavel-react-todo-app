<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;

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
    public function index(): Response
    {
        $user_id = Auth::id();
        $todos = Todo::select('id', 'user_id', 'content')
            // $todos = Todo::select('id', 'user_id', 'deadline', 'content', 'is_finished')
            ->where('user_id', Auth::id())
            ->latest()
            ->paginate(5);

        // dd($todos);
        return Inertia::render('Index', compact('todos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $user = Auth::user(); // ユーザーオブジェクトを取得
        return Inertia::render('Create', compact('user'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'user_id' => 'required|exists:users,id', // user_idは存在するユーザーIDであることを確認
            'content' => 'required|string|max:50', // contentは必須、文字列
        ]);

        Todo::create([
            'user_id' => $request->user_id,
            'content' => $request->content,
        ]);

        return redirect()->route('todos');
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
    public function edit(string $id): Response
    {
        $currentTodo = Todo::findOrFail($id);

        return Inertia::render('Edit', compact('currentTodo'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        $todo = Todo::findOrFail($id);
        $todo->content = $request->content;
        $todo->save();

        return redirect()->route('todos');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        Todo::findOrFail($id)->delete();

        return redirect()->route('todos');
    }
}
