import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StyleService {
    private themeWrapper: any = document.querySelector('body');

    constructor(private http: HttpClient) { }

    setTheme(theme: any) {
        return this.http.get('/assets/styles-template.json').subscribe((resp: any) => {
            for (let key in resp[theme]) {
                this.themeWrapper.style.setProperty(`--${key}`, resp[theme][key])
            }
        })
    }
}
