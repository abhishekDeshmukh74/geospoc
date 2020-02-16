import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardComponent } from './candidate-card.component';

@NgModule({
  declarations: [CandidateCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CandidateCardComponent]
})
export class CandidateCardModule { }
