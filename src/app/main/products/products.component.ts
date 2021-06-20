import { Products } from './../../shared/models/products/products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products$: Observable<Products[]>;

    header: Array<string>;

    dataTable: Observable<any[]>;

    constructor(private productService: ProductsService) { }

    ngOnInit(): void {
        this.products$ = this.productService.getProducts();

        this.header = ['_id', 'Name', 'Department', 'Price', '__v'];
    }

}
