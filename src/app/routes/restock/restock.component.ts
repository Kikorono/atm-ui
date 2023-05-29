import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bills.model';
import { AtmRepository } from '../../stores/atm/atm.repository';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'atm-restock',
    templateUrl: './restock.component.html',
    styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {

    stockDisplayedColumns: string[] = ['bill', 'stock'];
    stockDataSource: Bill[];
    currentStock: Bill[] = [];
    updated: boolean = false;

    constructor(private atmRepository: AtmRepository, private snackBar: MatSnackBar) {
        this.stockDataSource = this.atmRepository.getStock();
        this.cloneStock();
    }

    ngOnInit(): void {
    }

    /**
     * Checks to see if a stock number is different from the current stock to notify
     * the page that the "Update" button may be clicked.
     */
    fieldUpdated(): void {
        this.updated = false;

        for (let i = 0; i < this.currentStock.length; i++) {
            if (this.currentStock[i].stock !== this.stockDataSource[i].stock) {
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

    cloneStock(): void {
        this.currentStock = JSON.parse(JSON.stringify(this.stockDataSource)) as Bill[];
    }

    get submitDisabled(): boolean {
        return !this.updated;
    }

}
