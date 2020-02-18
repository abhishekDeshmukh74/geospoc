import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateProfilesComponent } from './candidate-profiles/candidate-profiles.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      allowedRole: 'CANDIDATE'
    }
  },
  {
    path: 'candidates',
    component: CandidateProfilesComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      allowedRole: 'RECRUITER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
