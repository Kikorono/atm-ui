import { Injectable } from '@angular/core';
import { AtmState, atmStore, saveStateToStorage } from './atm.store';
import { select } from '@ngneat/elf';
import { Observable } from 'rxjs';
import { BillStock } from '../../model/bill.model';
import { Transaction } from '../../model/transaction.model';

@Injectable({
    providedIn: 'root'
})
export class AtmRepository {

    stock$: Observable<BillStock[]> = atmStore.pipe(select((state) => state.stock));

    updateStock(stock: AtmState['stock']): void {
        atmStore.update((state) => ({
            ...state,
            stock
        }));

        this.saveState();
    }

    updateBillStock(billStock: BillStock): void {
        const atmStock = atmStore.getValue().stock;
        const currentBillStock = atmStock.find(billState => billState.bill === billStock.bill);

        if (currentBillStock) {
            currentBillStock.amount = billStock.amount;
        }

        this.updateStock(atmStock);
    }

    addTransaction(transaction: Transaction): void {
        atmStore.update(({ stock, transactions }) => ({
            stock,
            transactions: [
                ...transactions,
                transaction
            ]
        }));

        this.saveState();
    }

    saveState(state?: AtmState): void {
        saveStateToStorage(state || atmStore.getValue());
    }

    getStock(): BillStock[] {
        return atmStore.getValue().stock;
    }

    getTransactions(): Transaction[] {
        return atmStore.getValue().transactions;
    }

}
