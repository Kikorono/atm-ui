import { createStore, select, withProps } from '@ngneat/elf';
import { Bill } from '../../model/bills.model';

export interface AtmState {
    stock: Bill[];
}

const defaultState: AtmState = {
    stock: [
        {
            bill: 100,
            stock: 10
        },
        {
            bill: 50,
            stock: 10
        },
        {
            bill: 20,
            stock: 10
        },
        {
            bill: 10,
            stock: 10
        },
        {
            bill: 5,
            stock: 10
        },
        {
            bill: 1,
            stock: 10
        }
    ]
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
    console.log(`Saving state...`, state);
    localStorage.setItem('atm_state', JSON.stringify(state));
}

export const atmStore = createStore(
    { name: 'atm' },
    withProps<AtmState>(getStateFromStorage() || defaultState)
);


