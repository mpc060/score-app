import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {

    @Input() label: string;

    @Input() maxLength: string;

    @Input() selected: string;

    @Input() validate: any;

    @Output() selectedChange = new EventEmitter();

    selectedChangeValue(val: any) {
        this.selectedChange.emit(val);
    }

}