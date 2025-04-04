import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage {
  quizTitle: string = 'Quiz de Ejemplo';
  puntajeObtenido: number = 7;
  puntajeTotal: number = 10;
  mensajeResultado: string = '';

  constructor() {
    this.generarMensaje();
  }

  generarMensaje() {
    const porcentaje = (this.puntajeObtenido / this.puntajeTotal) * 100;
    if (porcentaje >= 80) {
      this.mensajeResultado = '¡Excelente trabajo!';
    } else if (porcentaje >= 50) {
      this.mensajeResultado = '¡Buen intento!';
    } else {
      this.mensajeResultado = 'Sigue practicando.';
    }
  }
}
