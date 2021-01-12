import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  posts: Post[] = [
    { title: 'sdfdas', text: 'dsfgdsfg', id: 1},
    { title: 'sdfdas', text: 'dsfgdsfg', id: 2}
  ]


  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
