import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { CandidateCardComponent } from './candidate-card.component';
@NgModule({
  declarations: [
    CandidateCardComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CandidateCardComponent
  ]
})
export class CandidateCardModule { }
