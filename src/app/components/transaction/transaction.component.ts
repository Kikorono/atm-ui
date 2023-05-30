import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { Transaction } from '../../model/transaction.model';
import { BillStock } from '../../model/bill.model';

@Component({
    selector: 'atm-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TransactionComponent implements OnChanges {

    readonly displayedColumns: string[] = ['bill', 'count', 'amount'];

    @Input()
    transaction: Transaction | null = null;

    @Input()
    header: string = 'Transaction';

    @Input()
    icon: string | null = null;

    @Input()
    iconColor: ThemePalette = 'primary';

    dataSource: BillStock[];

    constructor() {
        this.dataSource = this.transaction?.bills || [];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['transaction']?.currentValue) {
            this.dataSource = changes['transaction']?.currentValue?.bills || [];
        }
    }

    get totalBillCount(): number {
        if (!this.transaction?.bills?.length) {
            return 0;
        }

        return this.transaction.bills
            .map(b => b.amount)
            .reduce((a, b) => (a + b));
    }

    get grandTotal(): number {
        if (!this.transaction?.bills?.length) {
            return 0;
        }

        return this.transaction.bills
            .map(b => (b.bill * b.amount))
            .reduce((a, b) => (a + b));
    }

}
