import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'atm-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    readonly isAuthenticated$ = this.auth.isAuthenticated$;

    constructor(private auth: AuthService) {
    }

    logout(): void {
        this.auth.logout();
    }

    login(): void {
        this.auth.loginWithRedirect();
    }

}
