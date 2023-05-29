import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { TransactionComponent } from './transaction.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        TransactionComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatIconModule
    ],
    exports: [
        TransactionComponent
    ]
})
export class TransactionModule {
}
