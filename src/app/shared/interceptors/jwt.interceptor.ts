import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@constants';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {};

    // Add authorization header with jwt token if available
    const token = sessionStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN);
    if (token?.length > 0) {
      headers['authorization'] = `Bearer ${token}`;
    }
    request = request.clone({
      setHeaders: headers,
    });
    return next.handle(request);
  }
}
