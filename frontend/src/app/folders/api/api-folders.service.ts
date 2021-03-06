import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Folder } from 'src/app/models/folders';
import { Item } from 'src/app/models/items';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiFoldersService {
  public folderName: string;
  private urlBack: string = environment.url_back;

  constructor(
    private http: HttpClient,
    ruta: ActivatedRoute

  ) {
    this.folderName = ruta.snapshot.params['folderName'];
   }

  /**
   * folders
   */
  public folders() {
    return this.http.get(this.urlBack + 'folders');
  }
  /**
   * items
   */
  public items(folder: string|any) {
    return this.http.get(this.urlBack + 'items/' + folder);
  }

  /**
   * createFolder
   */
  public createFolder(newFolder: Folder) {
    return this.http.post(this.urlBack + 'folders',{
        "name": newFolder.folder_name
    });
  }
  public createItem(newItem: Item) {
    return this.http.post(this.urlBack + newItem.folder_name + '/items',{
        "description": newItem.item_description
    });
  }
  public chageItemState(newItem: any, state: any) {
    return this.http.put(this.urlBack  + 'items/' + newItem.description + '/state',{
        "description": newItem.item_description,
        "state": state
    });
  }
  public changeItem(newItem: any, oldItem: any) {
    return this.http.put(this.urlBack  + 'items/' + oldItem + '/update',{
        "description": newItem.item_description
    });
  }
  public deleteItem(id: any) {
    return this.http.delete(this.urlBack  + 'items/' + id);
  }
  public deleteFolder(name: any) {
    return this.http.delete(this.urlBack  + 'folders/' + name);
  }
}
