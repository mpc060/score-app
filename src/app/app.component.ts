import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItems } from './shared/models/menu/menu';
import { StyleService } from './shared/services/style/style.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private styleService: StyleService,
        private title: Title
    ) {
        this.styleService.setTheme('default');

        this.title.setTitle('App');
    }

    menuItens: MenuItems[] = [
        {
            name: 'Home',
            active: true,
            route: '/main/home'
        },
        {
            name: 'Produtos',
            active: false,
            route: '/main/products'
        },
    ];

}
