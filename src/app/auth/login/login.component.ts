import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    formLogin = this.formBuilder.group({
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
    });

    formError: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private snackBar: MatSnackBar,
        private router: Router) { }

    ngOnInit(): void {}

    onSubmit() {
        if (this.formLogin.invalid)  {
            this.formError = true;
            return;
        } else {
            this.formError = false;
        }

        this.authService.login(this.formLogin.value).subscribe(
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
