import { Component } from '@angular/core';

@Component({
    selector: 'atm-withdraw',
    templateUrl: './withdraw.component.html',
    styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {

    withdrawAmount: number | null = null;

    get submitDisabled(): boolean {
        return this.withdrawAmount === null || this.withdrawAmount === 0;
    }

}
