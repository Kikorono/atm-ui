import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthHttpInterceptor, AuthModule, AuthService } from '@auth0/auth0-angular';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AuthModule.forRoot({
            domain: 'atm-project.us.auth0.com',
            clientId: 'hweQdHgl8ybLnr7hAOVUkdonZY51cm9g',
            errorPath: '/auth/login',
            cacheLocation: 'localstorage',
            httpInterceptor: {
                allowedList: ['/api/*'],
            },
            authorizationParams: {
                redirect_uri: window.location.origin,
                audience: 'atm-api'
            }
        })
    ],
    providers: [
        // SnackBar duration set to 3 seconds
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000} },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
