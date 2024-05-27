import { Component } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    template: `
        <div class='center'> 
            <h1></h1>
            <img src="../assets/not_found.png" class = "center"/>
            <h1 routerLink="/recipes" class="center">
                Home
            </h1>
        </div>
    `,
    styles: [
    ]
})
export class PageNotFoundComponent {}
