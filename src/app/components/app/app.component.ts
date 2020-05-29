import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tic-tac-toe-angular';
  dimension: number = 0

  onChange($event: { target: { value: string; }; }) {
    this.dimension = parseInt($event.target.value)
  }
}
