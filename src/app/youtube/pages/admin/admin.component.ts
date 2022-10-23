import { IFormShape } from './../../../shared/models/form.model';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { regexForUrl } from 'src/app/shared/constants/urlRegex';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  form: FormGroup;

  formName = {
    formName: 'Create new card',
    submitName: 'Create card',
  };

  formElements = [
    {
      title: 'Title',
      name: 'title',
    },
    {
      title: 'Description',
      name: 'description',
    },
    {
      title: 'Link to image',
      name: 'image link',
    },
    {
      title: 'Link to video',
      name: 'video link',
    },
    {
      title: 'Creation date',
      name: 'date',
      type: 'date',
    },
  ];

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ),
      description: new FormControl('', Validators.compose([Validators.maxLength(255)])),
      ['image link']: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern(regexForUrl)]),
      ),
      ['video link']: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern(regexForUrl)]),
      ),
      date: new FormControl(
        '',
        Validators.compose([Validators.required, this.customDateValidation()]),
      ),
    });
  }

  onSubmit(value: IFormShape) {
    console.log(value);
  }

  customDateValidation() {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlDate = new Date(control.value).getTime();

      if (Date.now() > controlDate) {
        return {
          custom: {
            value: 'The date is invalid',
          },
        };
      }

      return null;
    };
  }
}
