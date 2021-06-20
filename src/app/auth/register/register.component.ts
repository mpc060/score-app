import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    formRegister = this.formBuilder.group({
        'firstname': ['', [Validators.required]],
        'lastname': ['', [Validators.required]],
        'address': ['', [Validators.required]],
        'city': ['', [Validators.required]],
        'state': ['', [Validators.required]],
        'phone': ['', [Validators.required]],
        'mobilephone': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'password1': ['', [Validators.required, Validators.minLength(6)]],
        'password2': ['', [Validators.required, Validators.minLength(6)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private snackBar: MatSnackBar,
        private router: Router) { }

    ngOnInit(): void { }

    onSubmit() {
        let u: User = { ...this.formRegister.value, password: this.formRegister.value.password1 };

        this.authService.register(u).subscribe((res) => {
            this.snackBar.open(
                'Registro realizado com sucesso!. Use as credências para acessa a sua conta!',
                'Ok', { duration: 2000 }
            );
            this.router.navigateByUrl('/auth/login');
        },
            (error) => {
                this.snackBar.open(
                    error.error.message, 'Ok', { duration: 2000 }
                );
            }
        )
    }
}
