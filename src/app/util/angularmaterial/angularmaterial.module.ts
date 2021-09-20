import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

const AngularMaterialComponents = [
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialComponents
  ],
  exports: [AngularMaterialComponents]
})
export class AngularmaterialModule { }
