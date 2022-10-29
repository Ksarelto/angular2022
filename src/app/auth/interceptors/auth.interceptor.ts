import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = `${environment.apiUrl}`;
    const userData = JSON.parse(localStorage.getItem('user_credentials') || '');

    if (!userData?.token) {
      return EMPTY;
    }

    const authRequest = request.clone({
      url: baseUrl + request.url,
      params: request.params.append('key', environment.apiKey),
    });

    return next.handle(authRequest);
  }
}
