import { ListComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ListsService } from './lists/lists.service';
import { Transition } from '@uirouter/core';

export const appState = {
  name: 'app',
  url: '',
  component: AppComponent
};

export const homeState = {
  parent: 'app',
  name: 'home',
  url: '/home',
  component: HomeComponent
};

export const listsState = {
  parent: 'app',
  name: 'lists',
  url: '/lists',
  component: ListsComponent,
  resolve: [
    {
      token: 'listsData',
      deps: [ListsService],
      resolveFn: (listsService: ListsService) =>
        listsService.getLists()
    },
    {
      token: 'item',
      deps: [ListsService],
      resolveFn: (listsService: ListsService) =>
        listsService.getListTasks()
    }
  ]
};

export const listState = {
  name: 'lists.list',
  url: '/:listId',
  component: ListComponent,
  resolve: [
    {
      token: 'list',
      deps: [Transition, 'listsData'],
      resolveFn: (trans: Transition, lists: any) =>
        lists.find((list) => list.id === trans.params().listId)
    },
    {
      token: 'item',
      deps: [Transition, 'item'],
      resolveFn: (trans: Transition, item: any) =>
        item.filter((filItem) => filItem.lists_id === trans.params().listId)
    }
  ]
};

export const APP_STATES = [appState, homeState, listsState, listState];
