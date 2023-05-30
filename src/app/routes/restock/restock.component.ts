import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BillStock, billTypes } from '../../model/bill.model';
import { AtmService } from '../../services/atm.service';

@Component({
    selector: 'atm-restock',
    templateUrl: './restock.component.html',
    styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {

    // @todo Kiko - 29/05/23 - Prevent negative number inputs

    readonly stockDisplayedColumns: string[] = ['bill', 'stock'];

    stockDataSource: BillStock[] = [];
    currentStock: BillStock[] = [];
    updated: boolean = false;

    constructor(
        private snackBar: MatSnackBar,
        private atmService: AtmService
    ) {
    }

    async ngOnInit(): Promise<void> {
        this.stockDataSource = await this.atmService.getAllBillStocks();
        this.cloneStock();
    }

    /**
     * Checks to see if a stock number is different from the current stock to notify
     * the page that the "Update" button may be clicked.
     */
    fieldUpdated(): void {
        this.updated = false;

        for (let i = 0; i < this.currentStock.length; i++) {
            if (this.currentStock[i].amount !== this.stockDataSource[i].amount) {
                this.updated = true;
                break;
            }
        }
    }

    /**
     * Update the ATM stock with the values input into the table.
     */
    async updateStock(): Promise<void> {
        this.stockDataSource = await this.atmService.updateBillStocks(this.stockDataSource);
        this.cloneStock();
        this.snackBar.open('Stock updated successfully', 'Close');
        this.updated = false;
    }

    /**
     * Sets the stock fields to their default values.
     */
    setDefaults(): void {
        this.stockDataSource = billTypes.map(bill => ({
            bill,
            amount: 10
        }));
        this.fieldUpdated();
    }

    cloneStock(): void {
        this.currentStock = JSON.parse(JSON.stringify(this.stockDataSource)) as BillStock[];
    }

    get submitDisabled(): boolean {
        return !this.updated;
    }

}
