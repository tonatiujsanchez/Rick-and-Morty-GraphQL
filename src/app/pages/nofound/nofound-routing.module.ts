import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NofoundComponent } from './nofound.component';





const routes: Routes = [
    {
        path: '',
        component: NofoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NofoundRoutingModule {}
