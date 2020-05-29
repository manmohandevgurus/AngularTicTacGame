import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() value: string;
  @Input() winColor: boolean;
  @Output() click = new EventEmitter<string>();

  handleClick() {
    this.click.emit();
  }
}
