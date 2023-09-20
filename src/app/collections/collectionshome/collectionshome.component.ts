import { Component } from '@angular/core';

@Component({
  selector: 'app-collectionshome',
  templateUrl: './collectionshome.component.html',
  styleUrls: ['./collectionshome.component.scss']
})
export class CollectionshomeComponent {
  details = [
    {
      name: 'yusuf',
      age: '25',
      job: 'bussiness man'
    },
    {
      name: 'yaqoob',
      age: '30',
      job: 'Entrepreneur'
    },
    {
      name: 'yahya',
      age: '45',
      job: 'bussiness man'
    }
  ]
  references = [
    {
      ref: 'name', head: 'Name'
    },
    {
      ref: 'age', head: 'Age'
    }, {
      ref: 'job', head: 'Job'
    }
  ]
}
