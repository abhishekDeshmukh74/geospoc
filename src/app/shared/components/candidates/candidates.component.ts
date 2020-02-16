import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidates: any[];

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.appService.getCandidates().subscribe(
      (res: any) => {
        this.candidates = res.candidates;
      }
    );
  }

}
