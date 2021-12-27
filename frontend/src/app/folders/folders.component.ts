import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Folder } from '../models/folders';
import { ApiFoldersService } from './api/api-folders.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folders: Array<any> = [];

  constructor(
    private api: ApiFoldersService,
    ) { }

  ngOnInit(): void {
    this.getFolders();
  }

  private getFolders() {
    this.api.folders().subscribe((folders: any) =>{
      this.folders = folders;
    });
  }
  onSubmit(form: NgForm){
    const add = form.value['add'];
    const newFolder = new Folder(add);
    this.api.createFolder(newFolder).subscribe((data) =>{
      this.ngOnInit();
    });
    form.reset();
  }
  delete(name: any){
    this.api.deleteFolder(name).subscribe((data) =>{
      this.ngOnInit();
    });
  }

}
