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
});
