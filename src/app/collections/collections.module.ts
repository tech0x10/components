import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionshomeComponent } from './collectionshome/collectionshome.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    CollectionshomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,SharedModule
  ]
})
export class CollectionsModule { }
