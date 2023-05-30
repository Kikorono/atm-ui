import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthModule } from '@auth0/auth0-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { NavComponent } from './nav.component';
import { RoleModule } from '../../directives/role/role.module';


@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
        AuthModule,
        RoleModule
    ],
    exports: [
        NavComponent
    ]
})
export class NavModule {
}
