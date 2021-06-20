import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() header: Array<string>;

    @Input() dataTable: Observable<any[]>;

    @Input() cols;

    constructor() { }

    ngOnInit(): void { }

    keepOriginalOrder = (a) => a.key;

    setCols() {
        let styles = {
            'grid-template-columns': `repeat(${this.cols}, 1fr)`,
        };
        return styles;
    }

}
