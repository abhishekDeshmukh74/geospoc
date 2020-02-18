import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { AppService } from '../app.service';
import { ICandidateProfile } from '../shared/components/candidate-card/candidate-card.interfaces';

@Component({
  selector: 'app-candidate-profiles',
  templateUrl: './candidate-profiles.component.html',
  styleUrls: ['./candidate-profiles.component.scss']
})
export class CandidateProfilesComponent implements OnInit {

  candidates: ICandidateProfile[] = [];
  filteredCandidates: ICandidateProfile[] = [];


  searchBoxFormControl = new FormControl('');

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.getCandidates();
    this.filterCandidates();
  }

  filterCandidates() {
    this.searchBoxFormControl
      .valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe((name: string) => {
        this.filteredCandidates = this.candidates.filter(candidate => name.includes(candidate.name));
      });
  }

  getCandidates() {
    this.appService.getCandidates().subscribe(
      (res: any) => {
        this.candidates = res.candidates;
        this.filteredCandidates = this.candidates;
      }
    );
  }

}
