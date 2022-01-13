package com.ensolvers.todolist.repositories;

import java.util.List;

import javax.transaction.Transactional;

import com.ensolvers.todolist.models.ItemModel;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<ItemModel, Integer> {
    @Query("select i from ItemModel i where folderModel.name = :name")
    List<ItemModel> findItemsByFolderName(String name);

    @Query("select i from ItemModel i where i.description = :description")
    ItemModel getItemByDescription(String description);

    @Query("select i from ItemModel i where i.item_id = :id")
    ItemModel getItemById(int id);

    @Transactional
    @Modifying
    @Query("delete ItemModel i where folderModel.name = :name")
    void deleteItemsByFolderName(String name);

}
