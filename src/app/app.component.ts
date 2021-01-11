import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '1';
  title2 = '2';

  onInput(event: any){
   this.title = event.target.value;
  }

}
