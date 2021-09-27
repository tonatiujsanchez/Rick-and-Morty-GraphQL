import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FavoritosComponent } from './favoritos.component';




const routes: Routes = [
    {
        path: '',
        component: FavoritosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FovoritosRoutingModule {}
