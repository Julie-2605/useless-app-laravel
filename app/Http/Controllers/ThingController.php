<?php

namespace App\Http\Controllers;

use App\Models\Thing;
use Illuminate\Http\Request;

class ThingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Thing::orderBy('position')->get();
    }

    public function updateOrder(Request $request)
    {
        $things = $request->input('things');

        foreach ($things as $index => $id) {
            Thing::where('id', $id)->update(['position' => $index]);
        }

        return response()->json(['success' => true]);
    }

    public function shuffle()
    {
        $things = Thing::inRandomOrder()->get();

        foreach ($things as $index => $thing)
        {
            $thing->update(['position' => $index]);
        }

        return response()->json(Thing::orderBy('position')->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Thing $thing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Thing $thing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Thing $thing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Thing $thing)
    {
        //
    }
}
