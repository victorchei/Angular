import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from '../todo.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  title = '';
  text = '';

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  addPost() {
    if(this.title.trim() && this.text.trim()){
      const post: Post ={
        title: this.title,
        text: this.text,
        id: Math.random()
      }
      this.onAdd.emit(post)
    }
  }
}
