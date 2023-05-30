import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[atmRole]',
})
export class RoleDirective implements OnInit, OnDestroy {

    private loggedInUser!: User;
    private requiredRole!: string;
    private subscription!: Subscription;

    @Input()
    set atmRole(atmRole: string) {
        this.requiredRole = atmRole;
        this.updateView();
    }
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private changeDetectorRef: ChangeDetectorRef,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.subscription = this.authService.user$.subscribe((user) => {
            if (user) {
                this.viewContainerRef.clear();
                this.loggedInUser = user;
                this.updateView();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private updateView() {
        if (this.hasRole()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }

        this.changeDetectorRef.markForCheck();
    }

    private hasRole() {
        if (this.requiredRole.startsWith('!')) {
            const notAllowedRole = this.requiredRole.substring(1);
            return !this.loggedInUser?.['https://atm-project.dev/roles']?.includes(notAllowedRole);
        } else {
            return this.loggedInUser?.['https://atm-project.dev/roles']?.includes(this.requiredRole);
        }
    }

}
