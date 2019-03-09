import { APP_STATES } from './app.states';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { routerConfigFn } from './router.config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      config: routerConfigFn
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
