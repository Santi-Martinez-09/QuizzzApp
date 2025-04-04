import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage {
  historial: any[] = [
    {
      titulo: 'Quiz 1',
      fecha: new Date(),
      puntaje: 8
    },
    {
      titulo: 'Quiz 2',
      fecha: new Date(),
      puntaje: 6
    }
  ];

  constructor() {}
}
