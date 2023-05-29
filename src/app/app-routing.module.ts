import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'withdraw',
        loadChildren: () => import('./routes/withdraw/withdraw.module').then(m => m.WithdrawModule)
    },
    {
        path: 'restock',
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
