import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, FormComponent],
})
export class SharedModule {}
