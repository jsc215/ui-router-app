import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { APP_STATES } from './app.states';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { routerConfigFn } from './router.config';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    ListComponent,
    ListDetailComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000
    }),
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      config: routerConfigFn
    })
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule {}
