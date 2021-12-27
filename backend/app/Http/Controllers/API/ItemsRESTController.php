<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Item;

use App\Models\Folder;

class ItemsRESTController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $folderName = $request->get('folder name');

        $folderId = Folder::select('folder_id')
                            ->where('folder_name', $folderName)
                            ->first();

        $data = Item::select('*')
                        ->where('folder_id', $folderId->folder_id)
                        ->get();

        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $folderName)
    {
        $item_description = $request->post('item name');

        $folderId = Folder::select('folder_id')
                            ->where('folder_name', $folderName)
                            ->first();

        Item::insert([
            'item_description' => $item_description,
            'is_marked' => null,
            'folder_id' => $folderId->folder_id
        ]);

        $data = Item::select('*')
                            ->where('folder_id', $folderId->folder_id)
                        ->get();

        return response()->json($data);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($folderName)
    {

        $folderId = Folder::select('folder_id')
                            ->where('folder_name', $folderName)
                            ->first();

        $data = Item::select('*')
                        ->where('folder_id', $folderId->folder_id)
                        ->get();

        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $name)
    {
        $item_description = $request->post('item name');

        $action = $request->post('action');

        $item_state = $request->post('item state');

        $item_new_name = $request->post('item new name');

        if ($item_new_name == '') {
            /*$resp = [
                'data' => 'entro'
            ];
            return response()->json($resp);*/
            $item_new_name = $item_description;
        }
        if ($action == 'state') {
            Item::where('item_description', $item_description)
            ->update([
            //'item_description' => $item_new_name,
            'is_marked' => $item_state
            ]);
            /*$resp = [
                'entro' => $item_state
            ];
            return response()->json($resp);*/
        } else{
            Item::where('item_description', $name)
            ->update([
            'item_description' => $item_new_name,
            //'is_marked' => $item_state
            ]);
            /*$resp = [
                'entro' => $name
            ];
            return response()->json($resp);*/
        }


        $data = Item::select('*')
                        ->get();

        $resp = [
            'data' => $data
        ];
        return response()->json($resp);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        /*$item_description = $request->post('item name');

        Item::where('item_description', $item_description)
                ->delete();*/

        Item::where('item_id', $id)
                ->delete();

        $data = Item::select('*')
                ->get();

        $resp = [
            'data' => $data
        ];
        return response()->json($resp);

    }
}
