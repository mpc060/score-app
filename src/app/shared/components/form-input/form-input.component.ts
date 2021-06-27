import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})

export class FormInputComponent implements OnInit {
    
    @Input() label: string;

    @Input() maxLength: string;

    @Input() form: any; 

    @Input() nameControl: string;

    @Input() type: string;

    @Input() formError: boolean;

    @Input() mask: string;

    @Output() selectedChange = new EventEmitter();

    inputField: FormControl;   

    ngOnInit() {
        this.inputField = this.form.controls[this.nameControl];
    }

    selectedChangeValue(val: any) {
        this.inputField.markAsTouched();
        this.selectedChange.emit(val);
    }
}