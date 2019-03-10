import { ListsService } from './lists.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @Input() listsData;
  @Input() items;

  // constructor(private listsService: ListsService) {}
  constructor() {

  }

  ngOnInit() {
    // if (!localStorage.getItem('lists')) {
    //   localStorage.setItem('lists', JSON.stringify(this.listsData));
    // }
    // this.listsService
    //   .getLists()
    //   .then((lists) => (this.lists = lists))
    //   .catch((error) => console.log(error));
  }
}
