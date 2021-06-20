import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private subjUser$: BehaviorSubject<User> = new BehaviorSubject(null);

    private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private http: HttpClient) { }

    register = (user: User): Observable<User> => this.http.post<User>(`${environment.auth}/register`, user);

    login = (credentials: { email: string, password: string }): Observable<User> =>
        this.http.post<User>(`${environment.auth}/login`, credentials)
            .pipe(
                tap((u: User) => {
                    localStorage.setItem('token', u.token);
                    this.subjLoggedIn$.next(true);
                    this.subjUser$.next(u)
                })
            )

    isAuthenticated = (): Observable<boolean> => {
        const token = localStorage.getItem('token');
        if (token && !this.subjUser$.value) {
            return this.checkTokenValidation();
        }
        return this.subjLoggedIn$.asObservable();
    }

    checkTokenValidation(): Observable<boolean> {
        return this.http.get<User>(`${environment.auth}/user`)
            .pipe(
                tap((u: User) => {
                    if (u) {
                        localStorage.setItem('token', u.token);
                        this.subjLoggedIn$.next(true);
                        this.subjUser$.next(u);
                    }
                }),
                map((u: User) => (u) ? true : false),
                catchError((err) => {
                    this.logout();
                    return of(false);
                })
            )
    }

    getUser = (): Observable<User> => this.subjUser$.asObservable();

    logout() {
        localStorage.removeItem('token');
        this.subjLoggedIn$.next(false);
        this.subjUser$.next(null);
    }

}
