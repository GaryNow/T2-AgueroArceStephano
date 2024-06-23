import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
    
  }

  submit(usuario: HTMLInputElement, password: HTMLInputElement): void {
    if (this.authService.login(usuario.value, password.value)) {
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos, Ingresa con Aguero y 12345');
    }
  }


}
