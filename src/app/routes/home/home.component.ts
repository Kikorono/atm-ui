import { Component } from '@angular/core';

import { BillStock } from '../../model/bill.model';
import { AtmRepository } from '../../stores/atm/atm.repository';
import { Transaction } from '../../model/transaction.model';

@Component({
    selector: 'atm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    readonly stockDisplayedColumns: string[] = ['bill', 'stock'];

    stockDataSource: BillStock[];
    transactions: Transaction[];

    constructor(private atmRepository: AtmRepository) {
        this.stockDataSource = this.atmRepository.getStock();

        // Flip the list of transactions so that the latest are displayed first
        this.transactions = this.atmRepository.getTransactions().reverse();
    }

}
