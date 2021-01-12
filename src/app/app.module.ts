import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './todo/post/post.component';
import { PostFormComponent } from './todo/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
