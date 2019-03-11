import { EditItemComponent } from './edit-item/edit-item.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ListsService } from './lists/lists.service';
import { Transition } from '@uirouter/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

export const appState = {
  name: 'app',
  url: '',
  component: AppComponent,
  // component: AppComponent
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
      resolveFn: (listsService: ListsService) => listsService.getLists()
    },
    {
      token: 'items',
      deps: [ListsService],
      resolveFn: (listsService: ListsService) => listsService.getListTasks()
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
      token: 'items',
      deps: [Transition, 'items'],
      resolveFn: (trans: Transition, items: any) =>
        items.filter((filItem) => filItem.lists_id === trans.params().listId)
    },
    {
      token: 'item',
      deps: [Transition, 'items'],
      resolveFn: (trans: Transition, items: any) =>
        items.map((item) => item.id === trans.params().listId)
    }
  ]
};

export const listDetailState = {
  name: 'lists.list.item',
  url: '/:itemId',
  component: ListDetailComponent,
  resolve: [
    {
      token: 'item',
      deps: [Transition, 'items'],
      resolveFn: (trans: Transition, items: any) =>
        items.find((selectedItem) => selectedItem.id == trans.params().itemId)
    }
  ]
};

export function getListId(listId, transition) {
  return transition.params().listId;
}

export const editListState = {
  name: 'lists.list.new',
  url: '/new',
  component: EditItemComponent,

  resolve: [
    {
      deps: [ListsService, Transition],
      token: 'listId',
      resolveFn: getListId
    }
  ]
};

export const APP_STATES = [
  appState,
  homeState,
  listsState,
  listState,
  listDetailState,
  editListState
];
