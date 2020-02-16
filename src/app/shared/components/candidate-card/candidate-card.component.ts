import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateCardComponent implements OnInit {

  @Input() candidate: string;

  constructor() { }

  ngOnInit() {
  }

}
