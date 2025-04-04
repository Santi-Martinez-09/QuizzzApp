import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface QuizHistorial {
  nombre: string;
  fecha: Date;
  puntaje: number;
  total: number;
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  historial: QuizHistorial[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    const historialRef = collection(this.firestore, 'historial');
    collectionData(historialRef, { idField: 'id' }).subscribe((data: any) => {
      // Si 'fecha' viene como Timestamp, convertirlo
      this.historial = data.map((item: any) => ({
        ...item,
        fecha: item.fecha?.toDate ? item.fecha.toDate() : item.fecha,
      }));
    });
  }
}
