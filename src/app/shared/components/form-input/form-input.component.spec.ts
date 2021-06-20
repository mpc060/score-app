import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input.component';

describe('FormInputComponent', () => {
    let component: FormInputComponent;
    let fixture: ComponentFixture<FormInputComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [FormInputComponent]
        });
        fixture = TestBed.createComponent(FormInputComponent);
        component = fixture.componentInstance;
    });

    it('Deve demonstrar a criação do componente', () => {
        expect(component).toBeTruthy();
    });

    it('Deve demonstrar o uso do selectedChangeValue()', () => {
        let value = "teste"
        expect(component.selectedChangeValue(value)).toBeUndefined();
    });
});