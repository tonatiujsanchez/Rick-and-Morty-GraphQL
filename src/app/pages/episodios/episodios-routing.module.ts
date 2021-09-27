import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EpisodiosComponent } from './episodios.component';

const routes: Routes = [
    {
        path: '',
        component: EpisodiosComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EpisodiosRoutingModule {}
