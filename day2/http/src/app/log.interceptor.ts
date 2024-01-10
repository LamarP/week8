import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestModified = request.clone({
      headers: request.headers.append('Auth', 'Bearer sdlfkjsdkghiaudfbgaiudfsb')
    });

    return next.handle(requestModified);
  }
}
