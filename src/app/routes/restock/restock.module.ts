import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestockRoutingModule } from './restock-routing.module';
import { RestockComponent } from './restock.component';
import { NavModule } from '../../components/nav/nav.module';


@NgModule({
    declarations: [
        RestockComponent
    ],
    imports: [
        CommonModule,
        RestockRoutingModule,
        NavModule
    ]
})
export class RestockModule {
}
