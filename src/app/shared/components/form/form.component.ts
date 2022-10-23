import { showErrorMessage } from './../../methods/validationMethods';
import { IFormName, IFormShape, IFormElem } from './../../models/form.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() form: FormGroup;

  @Input() formName: IFormName;

  @Input() formElements: IFormElem[];

  @Output() submitForm: EventEmitter<IFormShape> = new EventEmitter();

  onSubmitForm(value: IFormShape) {
    console.log(this.form.get('login'));
    this.submitForm.emit(value);
  }

  showErrors(errors: ValidationErrors | null | undefined, elem: IFormElem) {
    if (errors) {
      return showErrorMessage(errors, elem);
    }
  }
}
