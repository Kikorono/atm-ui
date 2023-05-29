import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawRoutingModule } from './withdraw-routing.module';
import { WithdrawComponent } from './withdraw.component';
import { NavModule } from '../../components/nav/nav.module';


@NgModule({
    declarations: [
        WithdrawComponent
    ],
    imports: [
        CommonModule,
        WithdrawRoutingModule,
        NavModule
    ]
})
export class WithdrawModule {
}
