
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/shared/models/user/user';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    formRegister = this.formBuilder.group({
        'firstname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        'lastname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        'address': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
        'city': ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
        'state': ['', [Validators.required, Validators.minLength(2)]],
        'phone': ['', [Validators.required]],
        'mobilephone': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'password1': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
        'password2': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
    });

    formError: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private snackBar: MatSnackBar,
        private router: Router) { }

    ngOnInit(): void { }

    onSubmit() {
        if (this.formRegister.invalid)  {
            this.formError = true;
            return;
        } else {
            this.formError = false;
        }

        let user: User = { ...this.formRegister.value, password: this.formRegister.value.password1 };

        this.authService.register(user).subscribe((res) => {
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
