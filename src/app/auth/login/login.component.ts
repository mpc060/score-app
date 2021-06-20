import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin = this.formBuilder.group({
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, Validators.minLength(6)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private snackBar: MatSnackBar,
        private router: Router) { }

    ngOnInit(): void { }

    onSubmit() {
        if (this.formLogin.errors) {
            this.snackBar.open(
                'Formulário inválido!', '', { duration: 2000 }
            );
            return;
        }

        const credentials = this.formLogin.value;

        this.authService.login(credentials).subscribe(
            user => {
                this.snackBar.open(
                    'Sucesso. Bem vindo ' + user.firstname + '!', 'OK',
                    { duration: 2000 }
                );
                this.router.navigateByUrl('/');
            },
            err => {
                this.snackBar.open(
                    'Erro ao acessar conta. Tente novamente', 'OK',
                    { duration: 2000 }
                );
            }
        )
    }
}
