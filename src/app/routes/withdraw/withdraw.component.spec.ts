import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawComponent } from './withdraw.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavModule } from '../../components/nav/nav.module';
import { TransactionModule } from '../../components/transaction/transaction.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WithdrawComponent', () => {
    let component: WithdrawComponent;
    let fixture: ComponentFixture<WithdrawComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WithdrawComponent],
            imports: [
                MatSnackBarModule,
                NavModule,
                TransactionModule,
                RouterTestingModule,
                MatCardModule,
                MatInputModule,
                FormsModule,
                BrowserAnimationsModule
            ]
        });
        fixture = TestBed.createComponent(WithdrawComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // @todo Kiko - 29/05/23 - Write WithdrawComponent tests
    // describe('submitWithdrawal', () => {
    //
    // });
});
