import { Component } from '@angular/core';
import { notFoundPageText } from 'src/app/shared/methods/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  pageText = notFoundPageText;
}
