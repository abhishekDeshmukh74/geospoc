import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiKey = '2182d6c67164463481074e7ab48181d3';

  constructor(
    private http: HttpClient
  ) { }

  getIpAddress() {
    return this.http
      .get<any>('https://api.ipify.org/?format=json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getGEOLocation(ip) {
    // Update your api key to get from https://ipgeolocation.io
    return this.http
      .get<any>(`https://api.ipgeolocation.io/ipgeo?apiKey=${this.apiKey}&ip=${ip}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProfile(updateProfileRequest: any) {
    return this.http.put<any>(`${environment.apiUrl}/profile`, updateProfileRequest);
  }

  getCandidates() {
    return this.http.get<any>(`${environment.apiUrl}/candidates`);
  }

  login(loginRequest: any) {
    return this.http.post<any>(`${environment.apiUrl}/login`, loginRequest);
  }

  register(registerRequest: any) {
    return this.http.post<any>(`${environment.apiUrl}/register`, registerRequest);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
