import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, password: string): boolean {
    if (usuario === 'Aguero' && password === '12345') {
      sessionStorage.setItem('Usuario', 'Aguero');
      // sessionStorage.setItem('isLogged', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout():void{
    sessionStorage.clear();
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("Usuario")
  }
}
