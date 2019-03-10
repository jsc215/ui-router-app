import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  constructor(private http: HttpClient) {}

  getLists() {
    return this.http.get('api/lists').toPromise();
  }

  getListTasks() {
    return this.http.get('api/listTasks').toPromise();
  }

  createListTask(listId, task) {
    return this.http.post(`api/listTasks/${listId},`, task).toPromise();
  }
}
