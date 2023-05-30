import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BillStock } from '../../model/bill.model';
import { lastValueFrom } from 'rxjs';
import { Transaction } from '../../model/transaction.model';
import { AtmRepository } from './atm.repository';

@Injectable({
    providedIn: 'root'
})
export class AtmService {

    constructor(private http: HttpClient, private atmRepository: AtmRepository) {
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
