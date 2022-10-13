import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() buttonType: string;

  @Input() buttonValue: string;

  @Input() buttonClass: string;

  @Input() placeholder: string;

  @Input() name: string;
}
