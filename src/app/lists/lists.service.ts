import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  lists: any;
  listTasks: any = [];
  constructor(private http: HttpClient) {}

  getLists() {
    this.lists = this.http.get('api/lists').toPromise();
    return this.lists;
  }

  getListTasks() {
   this.listTasks = this.http.get<any>('api/listTasks').toPromise();
   return this.listTasks;
  }

  createListTask(task) {
    return this.http.post(`api/listTasks`, task).toPromise();
  }
}
