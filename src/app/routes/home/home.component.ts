import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '@auth0/auth0-angular';

import { BillStock } from '../../model/bill.model';
import { Transaction } from '../../model/transaction.model';
import { AtmService } from '../../services/atm.service';

@Component({
    selector: 'atm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    readonly isAuthenticated$ = this.auth.isAuthenticated$;
    readonly user$ = this.auth.user$;

    readonly stockDisplayedColumns: string[] = ['bill', 'stock'];

    stockDataSource: BillStock[] = [];
    transactions: Transaction[] = [];

    private subscription!: Subscription;

    constructor(
        private atmService: AtmService,
        private auth: AuthService
    ) {
    }

    ngOnInit(): void {
        this.subscription = this.user$.subscribe(async user => {
            if (user?.['https://atm-project.dev/roles']?.includes('atm-admin')) {
                this.stockDataSource = await this.atmService.getAllBillStocks();
                this.transactions = await this.atmService.getAllTransactions();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    login(): void {
        this.auth.loginWithRedirect();
    }

}
