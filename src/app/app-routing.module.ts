import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
    {
        path: 'withdraw',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./routes/withdraw/withdraw.module').then(m => m.WithdrawModule)
    },
    {
        path: 'restock',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./routes/restock/restock.module').then(m => m.RestockModule)
    },
    {
        path: '',
        loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
