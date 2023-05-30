import { createStore, withProps } from '@ngneat/elf';
import { BillStock, billTypes } from '../../model/bill.model';
import { Transaction } from '../../model/transaction.model';

export interface AtmState {
    stock: BillStock[];
    transactions: Transaction[];
}

export const defaultState: AtmState = {
    stock: billTypes.map(bill => ({
        bill,
        amount: 10
    })),
    transactions: []
};

export const getStateFromStorage = (): AtmState | null => {
    const stateStr = localStorage.getItem('atm_state');

    if (stateStr) {
        try {
            const state: AtmState = JSON.parse(stateStr) as AtmState;
            return state || null;
        } catch (e) {
            console.error(e);
        }
    }

    return null;
};

export const saveStateToStorage = (state: AtmState): void => {
    localStorage.setItem('atm_state', JSON.stringify(state));
}

export const atmStore = createStore(
    { name: 'atm' },
    withProps<AtmState>(getStateFromStorage() || defaultState)
);
