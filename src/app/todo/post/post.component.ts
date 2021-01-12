import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../todo.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    @Input() post: Post;
    @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()

    removePost() {
        this.onRemove.emit(this.post.id)
    }
}
