import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ListerAppComponent } from './app.component';

@NgModule({
  declarations: [
    ListerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ListerAppComponent]
})
export class AppModule { }
