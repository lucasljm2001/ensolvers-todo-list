import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'folders', loadChildren: () => import('./folders/folders.module').then(m => m.FoldersModule) },
  { path:'', redirectTo: 'folders', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
