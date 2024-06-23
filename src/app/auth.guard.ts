import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServicio = inject(AuthService);
  const router = inject(Router);
  if(authServicio.isLogged()){
    return true;
  }

  router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  return false;
};
