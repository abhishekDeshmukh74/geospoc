import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-candidate-profiles',
  templateUrl: './candidate-profiles.component.html',
  styleUrls: ['./candidate-profiles.component.scss']
})
export class CandidateProfilesComponent implements OnInit {

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
