import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BillStock } from '../../model/bill.model';
import { AtmRepository } from '../../stores/atm/atm.repository';
import { defaultState } from '../../stores/atm/atm.store';

@Component({
    selector: 'atm-restock',
    templateUrl: './restock.component.html',
    styleUrls: ['./restock.component.scss']
})
export class RestockComponent {

    readonly stockDisplayedColumns: string[] = ['bill', 'stock'];

    stockDataSource: BillStock[];
    currentStock: BillStock[] = [];
    updated: boolean = false;

    constructor(
        private atmRepository: AtmRepository,
        private snackBar: MatSnackBar
    ) {
        this.stockDataSource = this.atmRepository.getStock();
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
    updateStock(): void {
        this.atmRepository.updateStock(this.stockDataSource);
        this.cloneStock();
        this.snackBar.open('Stock updated successfully', 'Close');
        this.updated = false;
    }

    /**
     * Sets the stock fields to their default values.
     */
    setDefaults(): void {
        this.stockDataSource = JSON.parse(JSON.stringify(defaultState.stock)) as BillStock[];
        this.fieldUpdated();
    }

    cloneStock(): void {
        this.currentStock = JSON.parse(JSON.stringify(this.stockDataSource)) as BillStock[];
    }

    get submitDisabled(): boolean {
        return !this.updated;
    }

}
