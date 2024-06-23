import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {


  horas: number = 0;
  minutos: number = 0;
  costo: number = 0;

  calcularCosto(): void {
    const minutosTotales = this.horas * 60 + this.minutos;

    this.costo = Math.ceil(minutosTotales / 60) * 1500;
  }
}
