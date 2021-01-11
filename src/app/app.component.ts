import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projectName = 'MY PROJECT'
  x = 0;
  constructor() {

    setInterval( () => {
      let str: any = this.projectName.toLowerCase().split('');
      str[this.x] = str[this.x].toUpperCase();
      this.projectName = str.join('');
      this.x++;
      if(this.projectName.length === this.x) this.x = 0
    }, 1000)
  }
}
