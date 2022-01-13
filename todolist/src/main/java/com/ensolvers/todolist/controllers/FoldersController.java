package com.ensolvers.todolist.controllers;

import java.util.ArrayList;

import com.ensolvers.todolist.models.FolderModel;
import com.ensolvers.todolist.models.ItemModel;
import com.ensolvers.todolist.services.FolderService;
import com.ensolvers.todolist.services.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/folders")
public class FoldersController {
    @Autowired
    FolderService folderService;
    @Autowired
    ItemService itemService;

    @GetMapping()
    public ArrayList<FolderModel> getFolders(){
        return folderService.getFolders();
    }

    @GetMapping("/{name}")
    public ArrayList<ItemModel> getFolderId(@PathVariable("name") String name){
        return this.itemService.getItems(name);
    }

    @PostMapping()
    public FolderModel createFolder(@RequestBody FolderModel folder){
        return this.folderService.createFolder(folder);
    }

    @DeleteMapping("/{name}")
    public void deleteFolder(@PathVariable("name") String name){
        ArrayList<ItemModel> items = this.itemService.getItems(name);
        for (ItemModel item : items) {
            this.itemService.deleteItem(item);
        }
        this.folderService.deleteFolder(name);
    }

}
