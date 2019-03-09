import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lists = [
      { id: 'work', name: 'Work Tasks' },
      { id: 'home', name: 'Home Tasks' },
      { id: 'misc', name: 'Misc Tasks' }
    ];
    const listTasks = [

        {
          id: '1',
          lists_id: 'work',
          name: 'Work on ui-router app'
        },
        {
          id: '2',
          lists_id: 'work',
          name: 'onboarding portal testing'
        },
        {
          id: '3',
          lists_id: 'home',
          name: 'do laundry'
        },
        {
          id: '4',
          lists_id: 'home',
          name: 'food shopping'
        },
        {
          id: '5',
          lists_id: 'misc',
          name: 'ESV study'
        },
        {
          id: '6',
          lists_id: 'misc',
          name: 'practice guitar for band'
        }
    ];
    return { lists, listTasks };
  }

  // constructor() { }
}
