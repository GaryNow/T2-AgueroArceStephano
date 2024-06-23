import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router:Router, private route: ActivatedRoute, private authService: AuthService){
    
  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }



  pregunta2(): void {
    this.router.navigate(["pregunta2"], {relativeTo: this.route})
  }

  pregunta3(): void {
    this.router.navigate(["pregunta3"], {relativeTo: this.route})
  }

  pregunta4(): void {
    this.router.navigate(["pregunta4"], {relativeTo: this.route})
  }

}
