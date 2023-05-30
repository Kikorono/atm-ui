import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponent } from './transaction.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TransactionComponent', () => {
    let component: TransactionComponent;
    let fixture: ComponentFixture<TransactionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TransactionComponent],
            imports: [
                MatIconModule,
                MatCardModule,
                MatTableModule,
                BrowserAnimationsModule
            ]
        });
        fixture = TestBed.createComponent(TransactionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('totalBillCount', () => {
        it('should display the correct number of bills', () => {
            component.transaction = {
                bills: [
                    {
                        bill: 100,
                        amount: 2
                    },
                    {
                        bill: 50,
                        amount: 1
                    },
                    {
                        bill: 20,
                        amount: 2
                    },
                    {
                        bill: 10,
                        amount: 1
                    },
                    {
                        bill: 5,
                        amount: 1
                    },
                    {
                        bill: 1,
                        amount: 2
                    }
                ],
                successful: true
            };

            fixture.detectChanges();

            expect(component.totalBillCount).toBe(9);
        });

        it('should display 0 if no bills were found', () => {
            component.transaction = {
                bills: [],
                successful: true
            };

            fixture.detectChanges();

            expect(component.totalBillCount).toBe(0);
        });
    });

    describe('grandTotal', () => {
        it('should display the correct amount', () => {
            component.transaction = {
                bills: [
                    {
                        bill: 100,
                        amount: 2
                    },
                    {
                        bill: 50,
                        amount: 1
                    },
                    {
                        bill: 20,
                        amount: 2
                    },
                    {
                        bill: 10,
                        amount: 1
                    },
                    {
                        bill: 5,
                        amount: 1
                    },
                    {
                        bill: 1,
                        amount: 2
                    }
                ],
                successful: true
            };

            fixture.detectChanges();

            expect(component.grandTotal).toBe(307);
        });

        it('should display 0 if no bills were found', () => {
            component.transaction = {
                bills: [],
                successful: true
            };

            fixture.detectChanges();

            expect(component.grandTotal).toBe(0);
        });
    });
});
