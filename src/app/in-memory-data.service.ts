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
        name: 'Work on ui-router app',
        description:
          'Letter wooded direct two men indeed income sister. Impression up admiration he by partiality is. Instantly immediate his saw one day perceived. Old blushes respect but offices hearted minutes effects. Written parties winding oh as in without on started. Residence gentleman yet preserved few convinced. Coming regret simple longer little am sister on. Do danger in to adieus ladies houses oh eldest. Gone pure late gay ham. They sigh were not find are rent. '
      },
      {
        id: '2',
        lists_id: 'work',
        name: 'onboarding portal testing',
        description:
          'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. '
      },
      {
        id: '3',
        lists_id: 'home',
        name: 'do laundry',
        description:
          'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. '
      },
      {
        id: '4',
        lists_id: 'home',
        name: 'food shopping',
        description:
          'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. '
      },
      {
        id: '5',
        lists_id: 'misc',
        name: 'ESV study',
        description:
          'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. '
      },
      {
        id: '6',
        lists_id: 'misc',
        name: 'practice guitar for band',
        description:
          'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. '
      }
    ];
    return { lists, listTasks };
  }

  // constructor() { }
}
