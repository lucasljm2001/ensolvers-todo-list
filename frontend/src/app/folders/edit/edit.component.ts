import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/items';
import { ApiFoldersService } from '../api/api-folders.service';
import {Location} from '@angular/common';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public itemName: string;
  public folderName: string;
  constructor(ruta: ActivatedRoute, private api: ApiFoldersService, private location: Location) {
    this.itemName = ruta.snapshot.params['itemName'];
    this.folderName = ruta.snapshot.params['folderName'];
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const add = form.value['add'];
    const newItem = new Item(this.folderName, add, null);
    this.api.changeItem(newItem, this.itemName).subscribe((data) =>{
      this.changeTittle(data)
    });
    form.reset();
  }

  changeTittle(newTittle: any){
    this.itemName = newTittle.description;
  }
  goBack(){
    this.location.back();
  }
}
