import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { NumpadComponent } from './numpad/numpad.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    NumpadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
