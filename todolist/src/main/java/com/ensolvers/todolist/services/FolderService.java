package com.ensolvers.todolist.services;

import com.ensolvers.todolist.repositories.FolderRepository;

import java.util.ArrayList;

import com.ensolvers.todolist.models.FolderModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FolderService {
    @Autowired
    FolderRepository folderRepository;

    public ArrayList<FolderModel> getFolders(){
        return (ArrayList<FolderModel>) folderRepository.findAll();
    }

    public FolderModel createFolder(FolderModel folder){
        return folderRepository.save(folder);
    }

    public void deleteFolder(String name){
        folderRepository.deleteByName(name);
    }

    public FolderModel getFolderByName(String name){
        return folderRepository.getFolderByName(name);
    }
}
