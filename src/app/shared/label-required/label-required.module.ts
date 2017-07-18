import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelRequiredComponent } from './label-required.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LabelRequiredComponent
  ],
  exports: [
    LabelRequiredComponent
  ]
})
export class LabelRequiredModule { }
