import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  promedio: number | null = null;
  
  constructor() { }
  
  calcularPromedio() {
    const notas: number[] = [this.nota1, this.nota2, this.nota3, this.nota4];

    const notaMinima = Math.min(...notas);
    
    const notasAltas = notas.filter(nota => nota !== notaMinima);

    this.promedio = notasAltas[0] * 0.2 + notasAltas[1] * 0.3 + notasAltas[2] * 0.5;
  }

}
