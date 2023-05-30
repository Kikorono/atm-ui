import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockComponent } from './restock.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavModule } from '../../components/nav/nav.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const stock1 = [
    {
        bill: 100,
        amount: 1
    },
    {
        bill: 50,
        amount: 0
    },
    {
        bill: 20,
        amount: 1
    },
    {
        bill: 10,
        amount: 2
    },
    {
        bill: 5,
        amount: 1
    },
    {
        bill: 1,
        amount: 2
    }
];

const stock2 = [
    {
        bill: 100,
        amount: 5
    },
    {
        bill: 50,
        amount: 6
    },
    {
        bill: 20,
        amount: 7
    },
    {
        bill: 10,
        amount: 8
    },
    {
        bill: 5,
        amount: 9
    },
    {
        bill: 1,
        amount: 10
    }
];

describe('RestockComponent', () => {
    let component: RestockComponent;
    let fixture: ComponentFixture<RestockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RestockComponent],
            imports: [
                MatSnackBarModule,
                NavModule,
                RouterTestingModule,
                MatCardModule,
                MatDividerModule,
                MatTableModule,
                MatInputModule,
                FormsModule,
                BrowserAnimationsModule
            ]
        });
        fixture = TestBed.createComponent(RestockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('fieldUpdated', () => {
        it(`should set 'updated' to true if an update was made`, () => {
            component.currentStock = stock1;
            component.stockDataSource = stock2;
            component.updated = false;

            component.fieldUpdated();

            expect(component.updated).toBeTrue();
        });

        it(`should set 'updated' to false if an update was not made`, () => {
            component.currentStock = stock1;
            component.stockDataSource = stock1;
            component.updated = true;

            component.fieldUpdated();

            expect(component.updated).toBeFalse();
        });
    });
});
