import { Component } from '@angular/core';

@Component({
    selector: 'atm-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    loggedIn: boolean = true;

}
