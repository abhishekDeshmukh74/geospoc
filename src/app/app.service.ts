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
  }

  getGEOLocation(ip) {
    // Update your api key to get from https://ipgeolocation.io
    return this.http
      .get<any>(`https://api.ipgeolocation.io/ipgeo?apiKey=${this.apiKey}&ip=${ip}`)
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

}
