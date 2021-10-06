import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const AngularMaterialComponents = [
  MatCardModule,
  MatIconModule
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
