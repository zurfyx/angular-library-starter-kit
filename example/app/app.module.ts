import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaggifyModule } from '../../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    TaggifyModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
