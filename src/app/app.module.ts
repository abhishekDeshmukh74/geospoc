import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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
import { HomeComponent } from './home/home.component';
import { CandidateProfilesComponent } from './candidate-profiles/candidate-profiles.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CandidateCardModule } from './shared/components/candidate-card/candidate-card.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidateProfilesComponent,
    MyProfileComponent,
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
    CandidateCardModule,
    HttpClientModule,
    LoginFormModule,
    RegisterFormModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
