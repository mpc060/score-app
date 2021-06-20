import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule,
        MatSnackBarModule
    ],
    exports: [
        FormInputComponent,
        TableComponent,
        HeaderComponent,

        MatSnackBarModule
    ],
    declarations: [
        FormInputComponent,
        TableComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
