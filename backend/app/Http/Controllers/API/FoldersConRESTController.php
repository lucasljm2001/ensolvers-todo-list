<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Item;

use App\Models\Folder;

class FoldersConRESTController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Folder::select('*')
                        ->get();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $folderName = $request->post('folder name');

        Folder::insert([
            'folder_name' => $folderName
        ]);
        $data = Folder::select('*')
                        ->get();
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $name)
    {
        $folderId = Folder::select('folder_id')
                            ->where('folder_name', $name)
                            ->first();
        Item::where('folder_id', $folderId->folder_id)
                    ->delete();

        Folder::where('folder_id', $folderId->folder_id)
                ->delete();

        $data = Folder::select('*')
                ->get();

        return response()->json($data);
    }
}
