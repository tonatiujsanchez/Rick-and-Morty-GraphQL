import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharactersResult } from '../interfaces/data.interface';


const MY_FAVORITES  = 'myfovorites';
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private charactersFavoritesSubject = new BehaviorSubject<CharactersResult[] | null>(null);
  charactersFavorites$ = this.charactersFavoritesSubject.asObservable();


  constructor() { 
    this.initialStorage();
  }

  private initialStorage(): void{
    const currents = JSON.parse( localStorage.getItem( MY_FAVORITES )! );

    if( !currents){
      localStorage.setItem( MY_FAVORITES, JSON.stringify( [] ) )
    }
    this.getFavorites();
  }

  
  getFavorites(): CharactersResult[]{
    try {
      const charactersFavorites = JSON.parse( localStorage.getItem( MY_FAVORITES )! );
      this.charactersFavoritesSubject.next( charactersFavorites );

      return charactersFavorites;
    } catch (error) {
      console.error( 'Error al obtener los favoritos del Local Storage.', error );
      return [];
    }
  }


  toggleFavorito( favorito: CharactersResult ){
    favorito.isFavorite = !favorito.isFavorite;

    const favoritos = this.getFavorites();
    const existeFavorito = favoritos.find( fav => fav.id === favorito.id ); 

    existeFavorito ? this.removerFavorito( favorito ) : this.agregarFavorito( favorito )

  }

  

  agregarFavorito( favorito: CharactersResult ){
    try {
      const favoritos = this.getFavorites();
      localStorage.setItem( MY_FAVORITES, JSON.stringify( [...favoritos, favorito] ) )
      this.charactersFavoritesSubject.next( [...favoritos, favorito] );

    } catch (error) {
      console.error( 'Error al guardar el favorito en el Local Storage.', error ); 
    } 
  }

  removerFavorito( favorito: CharactersResult ){
    try {
      const favoritos = this.getFavorites();
      const favoritosFilter: CharactersResult[] = favoritos.filter( fav => fav.id !== favorito.id );
      localStorage.setItem( MY_FAVORITES, JSON.stringify( favoritosFilter ) );
      this.charactersFavoritesSubject.next( [...favoritosFilter] );
      
    } catch (error) {
      console.error( 'Error al aliminar el favorito en el Local Storage.', error ); 
    }

  }


}
