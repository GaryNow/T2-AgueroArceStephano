import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServicio = inject(AuthService);
  const router = inject(Router);
  
  // Verificar si está autenticado
  if (authServicio.isLogged()) {
    // Obtener el usuario almacenado en sessionStorage
    const currentUser = sessionStorage.getItem('Usuario');
    
    // Verificar si el usuario es "Aguero"
    if (currentUser === 'Aguero') {
      return true;
    } else {
      router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

  router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  return false;
};
