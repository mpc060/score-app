import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent
    ],
    imports: [
        HttpClientModule,
        MainRoutingModule,
        SharedModule
    ],
    exports: [

    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MainModule { }
