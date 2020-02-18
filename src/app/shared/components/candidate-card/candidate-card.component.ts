import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';

import { ICandidateProfile } from './candidate-card.interfaces';
import { CONSTANTS } from '@constants';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateCardComponent implements OnInit {

  loading = true;

  @Input() candidate: ICandidateProfile;

  constructor() { }

  ngOnInit() {
  }

  onProgress(progressData: PDFProgressData) {
    this.loading = progressData.loaded < progressData.total;
  }

  onResume() {
    window.open(this.candidate.resume);
  }
}
