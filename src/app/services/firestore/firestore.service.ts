import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) { }

  // Guardar datos de actividad o progreso del usuario
  async guardarProgreso(usuarioId: string, actividadId: string, puntaje: number) {
    try {
      const progresoCollection = collection(this.firestore, 'progresos');

      const progreso = {
        usuario: usuarioId,
        actividad: actividadId,
        puntaje: puntaje,
        fecha: Timestamp.now()
      };

      await addDoc(progresoCollection, progreso);
      console.log('✅ Progreso guardado:', progreso);
    } catch (error) {
      console.error('❌ Error al guardar progreso:', error);
      throw error;
    }
  }

  // Obtener progreso por usuario
  obtenerProgresoPorUsuario(usuarioId: string): Observable<any[]> {
    const progresoCollection = collection(this.firestore, 'progresos');
    const q = query(progresoCollection, where('usuario', '==', usuarioId));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }
}
