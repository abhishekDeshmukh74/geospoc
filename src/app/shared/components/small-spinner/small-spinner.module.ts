import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { SmallSpinnerComponent } from './small-spinner.component';

@NgModule({
  declarations: [SmallSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [SmallSpinnerComponent],
})
export class SmallSpinnerModule {}
