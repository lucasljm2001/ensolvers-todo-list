package com.ensolvers.todolist.repositories;


import javax.transaction.Transactional;

import com.ensolvers.todolist.models.FolderModel;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends CrudRepository<FolderModel, Integer>{
    @Transactional
    @Modifying
    @Query(value = "delete from folders  where name = :name", nativeQuery = true)
    void deleteByName(String name);

    @Query("select f from FolderModel f where f.name = :name")
    FolderModel getFolderByName(String name);
}
