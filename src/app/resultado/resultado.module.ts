import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResultadoPage } from './resultado.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResultadoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResultadoPage
      }
    ])
  ]
})
export class ResultadoPageModule {}
