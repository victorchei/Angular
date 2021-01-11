import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pades/list/list.component';
import { CalcComponent } from './pades/calc2/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
