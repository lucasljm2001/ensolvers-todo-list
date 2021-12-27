import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FoldersComponent } from './folders.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: '', component: FoldersComponent },
  { path: ':folderName/items', component: ItemsComponent },
  { path: ':folderName/items/:itemName', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersRoutingModule { }
