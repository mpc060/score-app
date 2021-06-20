import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    authenticated$: Observable<boolean>;

    user$: Observable<User>;

    @Input() menuItens;

    constructor(
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.authenticated$ = this.authService.isAuthenticated();

        this.user$ = this.authService.getUser();

        this.changeView({ route: location.pathname })
    }

    changeView(event) {
        this.menuItens.map(resp => {
            resp.active = false;
            if (resp.route === event.route) {
                resp.active = true;
            }
        })
    }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/auth/login');
    }

}
