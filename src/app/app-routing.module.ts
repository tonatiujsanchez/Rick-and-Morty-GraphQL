import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./pages/home/home.module').then( m => m.HomeModule )
  },
  {
    path:'personaje/:idPersonaje',
    loadChildren: ()=> import('./pages/personaje/personaje.module').then( m => m.PersonajeModule )
  },
  {
    path: 'episodios',
    loadChildren: ()=> import('./pages/episodios/episodios.module').then( m => m.EpisodiosModule )
  },
  {
    path: 'favoritos',
    loadChildren: ()=> import('./pages/favoritos/favoritos.module').then( m => m.FavoritosModule )
  },
  {
    path: 'about',
    loadChildren: ()=> import('./pages/about/about.module').then( m => m.AboutModule )
  },
  {
    path: '**',
    loadChildren: ()=> import('./pages/nofound/nofound.module').then( m => m.NofoundModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
