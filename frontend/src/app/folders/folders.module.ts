import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersComponent } from './folders.component';
import { ItemsComponent } from './items/items.component';
import { EditComponent } from './edit/edit.component';
//import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    FoldersComponent,
    ItemsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FoldersRoutingModule,
    FormsModule
  ]
})
export class FoldersModule { }
