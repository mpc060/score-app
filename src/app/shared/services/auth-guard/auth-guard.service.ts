import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> =>
        this.authService.isAuthenticated().pipe(
            tap((b) => {
                if (!b) {
                    this.router.navigateByUrl('/auth/login');
                }
            })
        )

}
