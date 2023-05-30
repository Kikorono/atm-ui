import { Component } from '@angular/core';

import { BillStock, billTypes } from '../../model/bill.model';
import { Transaction } from '../../model/transaction.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtmService } from '../../services/atm.service';

@Component({
    selector: 'atm-withdraw',
    templateUrl: './withdraw.component.html',
    styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {

    withdrawAmount: number | null = null;
    transaction: Transaction | null = null;
    transactionFailed: boolean = false;

    constructor(
        private snackBar: MatSnackBar,
        private atmService: AtmService
    ) {
    }

    async submitWithdrawal(): Promise<void> {
        if (!this.withdrawAmount || this.withdrawAmount < 0) {
            // User did not enter anything, entered 0, or entered a negative number -, don't do anything
            return;
        }

        const currentStock = await this.atmService.getAllBillStocks();

        const totalBills: BillStock[] = [];
        let cashRemainder = this.withdrawAmount;

        for (const bill of billTypes) {
            const currentBill = currentStock.find(billStock => billStock.bill === bill);

            // Bill not found, skip it
            if (!currentBill) {
                continue;
            }

            const currentBillStock = currentBill.amount || 0;

            // No stock remaining for this bill, skip it
            if (!currentBillStock) {
                continue;
            }

            let billCount = Math.floor(cashRemainder / bill);
            if (billCount > currentBillStock) {
                billCount = currentBillStock;
            }

            currentBill.amount -= billCount;

            const cashAmount = billCount * bill;
            cashRemainder = cashRemainder - cashAmount;

            if (billCount > 0) {
                totalBills.push({
                    bill,
                    amount: billCount
                })
            }
        }

        const successful = cashRemainder === 0;

        const transaction: Transaction = {
            bills: totalBills,
            successful
        };

        this.withdrawAmount = null;

        if (successful) {
            // Success!
            this.transaction = transaction;
            await this.atmService.updateBillStocks(currentStock);
            this.snackBar.open('Transaction successful', 'Close');
        } else {
            // Error, not enough stock
            this.transactionFailed = true;
        }

        await this.atmService.addTransaction(transaction);
    }

    reset(): void {
        this.withdrawAmount = null;
        this.transaction = null;
        this.transactionFailed = false;
    }

    get submitDisabled(): boolean {
        return this.withdrawAmount === null || this.withdrawAmount === 0;
    }

}
