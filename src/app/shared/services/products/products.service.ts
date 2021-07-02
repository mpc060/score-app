import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Products } from './../../models/products/products';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    getProducts = (): Observable<Products[]> => this.http.get<Products[]>(`${environment.api}/products`)
        .pipe(
            map((resp) => {
                let productsList: Products[] = [];
                resp.filter((data: Products) => {
                    const { department, name, price } = data;
                    productsList.push({ department, name, price })                       
                });
                return productsList;
            }),
            catchError((e) => throwError(e))
        );
}
