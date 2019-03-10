import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  // @Input() newItem: any;
  @Input() listId: string;
  // @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
