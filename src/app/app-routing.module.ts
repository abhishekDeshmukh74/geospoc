import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatesComponent } from './shared/components/candidates/candidates.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'candidates',
    component: CandidatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
