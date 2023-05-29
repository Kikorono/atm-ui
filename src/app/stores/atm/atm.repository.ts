import { Injectable } from '@angular/core';
import { AtmState, atmStore, saveStateToStorage } from './atm.store';
import { select } from '@ngneat/elf';
import { Observable } from 'rxjs';
import { Bill } from '../../model/bills.model';

@Injectable({
    providedIn: 'root'
})
export class AtmRepository {

    stock$: Observable<Bill[]> = atmStore.pipe(select((state) => state.stock));

    updateStock(stock: AtmState['stock']): void {
        atmStore.update((state) => ({
            ...state,
            stock,
        }));

        this.saveState();
    }

    updateBillStock(billStock: Bill): void {
        const atmStock = atmStore.getValue().stock;
        const currentBillStock = atmStock.find(billState => billState.bill === billStock.bill);

        if (currentBillStock) {
            currentBillStock.stock = billStock.stock;
        }

        this.updateStock(atmStock);
    }

    saveState(state?: AtmState): void {
        saveStateToStorage(state || atmStore.getValue());
    }

    getStock(): Bill[] {
        return atmStore.getValue().stock;
    }

}
