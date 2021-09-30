import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { BehaviorSubject } from 'rxjs';
import { take, tap } from "rxjs/operators";
import { CharactersResult, EpisodesResult, Data } from '../interfaces/data.interface';
import { FavoritosService } from './favoritos.service';

const QUERY = gql`
{
  episodes{
    results{
      name
      episode
    }
  }
  characters {
    results {
      id
      name
      status
      species
      gender
      created
      origin{
        name
      }
      location{
        name
      }
      image
    }
  }
}`

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private episodeSubject = new BehaviorSubject<EpisodesResult[] | null>(null);
  episodes$ = this.episodeSubject.asObservable();

  private charactersSubject = new BehaviorSubject<CharactersResult[] | null>(null);
  characters$ = this.charactersSubject.asObservable();

  constructor(
    private apollo: Apollo,
    private favoritosSvc: FavoritosService
  ) { 
    // this.getData();
  }



  getData():void{
    this.apollo.watchQuery<Data>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap( ({data:{ characters, episodes }}) => {

        // this.charactersSubject.next( characters.results );
        this.episodeSubject.next( episodes.results );
        this.parseNewData( characters.results )
      })
    ).subscribe();
  }


  private parseNewData( characters: CharactersResult[] ){
    const favoritos = this.favoritosSvc.getFavorites();

    const newData:CharactersResult[] = characters.map( char =>{
      const isFav = !! favoritos.find( fav => fav.id === char.id );
      // char.isFavorite = isFav;
      return {...char, isFavorite: isFav}
    });

    this.charactersSubject.next( [...newData] );
  }


}
