import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { ThrownError } from '../interfaces/thrown-error.interface';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private alertService: AlertService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<ThrownError>> {
        return next.handle(request).pipe(
            catchError((err) => {
                console.log('ErrorInterceptor', err);
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 0:
                            this.alertService.error('API is Offline :/');
                            break;

                        case 401:
                            this.alertService.error('Session Timeout. Please login again');
                            break;

                        default:
                            this.alertService.error('Exception occurred! Please try again later');
                    }
                    return throwError({
                        status: err.status,
                        message: err.error.message
                    });
                }
            })
        );
    }
}
