import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { BillStock } from '../model/bill.model';
import { Transaction } from '../model/transaction.model';

@Injectable({
    providedIn: 'root'
})
export class AtmService {

    constructor(private http: HttpClient) {
    }

    async addTransaction(transaction: Transaction): Promise<Transaction> {
        return lastValueFrom(this.http.post<Transaction>('/api/transactions', transaction));
    }

    async updateBillStocks(billStocks: BillStock[]): Promise<BillStock[]> {
        return lastValueFrom(this.http.patch<BillStock[]>('/api/bill-stocks', {
            stock: billStocks
        }));
    }

    async getAllTransactions(): Promise<Transaction[]> {
        return lastValueFrom(this.http.get<Transaction[]>('/api/transactions'));
    }

    async getAllBillStocks(): Promise<BillStock[]> {
        return lastValueFrom(this.http.get<BillStock[]>('/api/bill-stocks'));
    }

}
