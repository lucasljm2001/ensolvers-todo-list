import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/items';
import { ApiFoldersService } from '../api/api-folders.service';

@Component({
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public folderName: string;
  items: Array<any> = [];
  public state: any = 'true';

  constructor(ruta: ActivatedRoute, private api: ApiFoldersService) {
    this.folderName = ruta.snapshot.params['folderName'];
  }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.api.items(this.folderName).subscribe((items: any) =>{
      this.items = items;
      console.log(items);
    });
  }
  onSubmit(form: NgForm){
    const add = form.value['add'];
    const newItem = new Item(this.folderName, add, null);
    this.api.createItem(newItem).subscribe((data) =>{
      this.ngOnInit();
    });
    form.reset();
  }
  changeState(event: any, item: any): void {
    if (event.currentTarget.checked) {
      item.state = 'true';
    } else{
      item.state = null;
    }
    this.api.chageItemState(item, item.state).subscribe((data: any) =>{
      console.log(data);
    });
  }
  delete(id: any){
    this.api.deleteItem(id).subscribe((data) =>{
      this.ngOnInit();
    });
  }
}
