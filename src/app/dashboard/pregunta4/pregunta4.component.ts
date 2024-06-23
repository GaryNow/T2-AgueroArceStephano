import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta4',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})
export class Pregunta4Component {

  precioUnitario: number = 0;
  cantidad: number = 0;
  precioFinal: number | null = null;

  constructor() { }

  calcularPrecio() {
    if (this.cantidad > 20) {
      this.precioFinal = this.precioUnitario * this.cantidad * 0.9;
    } else if (this.cantidad > 10) {
      this.precioFinal = this.precioUnitario * this.cantidad * 0.95;
    } else {
      this.precioFinal = this.precioUnitario * this.cantidad;
    }
    this.precioFinal = parseFloat(this.precioFinal.toFixed(2));
  }

}
