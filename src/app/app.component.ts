import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue = '';

  onInput(event: any): void {
    this.inputValue = event.target.value;
  }

  onBlur(string) {
    this.inputValue = string
  }
}
