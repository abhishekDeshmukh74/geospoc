import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormModule } from './shared/components/login-form/login-form.module';
import { RegisterFormModule } from './shared/components/register-form/register-form.module';
import { CandidatesComponent } from './shared/components/candidates/candidates.component';
import { HomeComponent } from './shared/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
    HttpClientModule,
    LoginFormModule,
    RegisterFormModule,
    MatTabsModule,
    MatSnackBarModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
