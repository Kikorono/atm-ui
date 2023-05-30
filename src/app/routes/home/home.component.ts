import { Component, OnInit } from '@angular/core';

import { BillStock } from '../../model/bill.model';
import { Transaction } from '../../model/transaction.model';
import { AtmService } from '../../services/atm.service';

@Component({
    selector: 'atm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    readonly stockDisplayedColumns: string[] = ['bill', 'stock'];

    stockDataSource: BillStock[] = [];
    transactions: Transaction[] = [];

    constructor(private atmService: AtmService) {
    }

    async ngOnInit(): Promise<void> {
        this.stockDataSource = await this.atmService.getAllBillStocks();
        this.transactions = await this.atmService.getAllTransactions();
    }

}
