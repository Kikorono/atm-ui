import { BillStock } from './bill.model';

export interface Transaction {
    bills: BillStock[];
    successful: boolean;
}
