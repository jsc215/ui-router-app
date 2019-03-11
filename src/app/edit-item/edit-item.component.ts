import { ListsService } from './../lists/lists.service';
import { Component, OnInit, Input } from '@angular/core';
import {
  Form,
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { UIRouter } from '@uirouter/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  listTasks = [];
  task: string;
  description: string;
  id: number;
  @Input() items;
  // @Input() newItem: any;
  @Input() listId: string;
  form: FormGroup;
  // @Input() item: any;
  constructor(
    private listsService: ListsService,
    private fBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    // this.id = this.items.length;
    // this.id = parseInt(this.id) + 1;
    // this.id = this.id.toString();
  }

  createForm() {
    this.id = Math.floor(Math.random() * (1000 - 5 + 1)) + 5;
    // this.id = parseInt(this.id) + 1;
    // this.id = this.id + 1;
    // this.id = this.id.toString();
    this.form = this.fBuilder.group({
      id: this.id,
      lists_id: this.listId,
      task: '',
      description: ''
    });
  }

  onSubmit(form) {
    console.log(form);
    this.listsService
      .createListTask(form)
      .then((task) => this.listsService.getListTasks())
      .then((listTasks) => (this.listTasks = listTasks))
      .catch((error) => console.log(error));
    // this.listsService
    //   .createListTask(this.listId, form.value)
    //   .then((task) => {
    //    console.log(task);
    //    console.log(this.items);
    //   }).catch(error => console.log(error.message));
  }
}
