import { Directive, HostBinding, Input } from '@angular/core';
import { compareDates } from '../shared/compareDates';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective {
  @HostBinding('style.borderColor') borderColor: string;

  @Input() set appBorderColor(date: string) {
    this.borderColor = compareDates(date);
  }
}
