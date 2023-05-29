import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestockComponent } from './restock.component';

const routes: Routes = [
    {
        path: '',
        component: RestockComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestockRoutingModule {
}
