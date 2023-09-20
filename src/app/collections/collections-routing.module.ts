import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionshomeComponent } from './collectionshome/collectionshome.component';

const routes: Routes = [{
  path: '', component: CollectionshomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
