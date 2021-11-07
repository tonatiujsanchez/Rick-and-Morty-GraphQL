import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { BehaviorSubject } from 'rxjs';
import { catchError, pluck, take, tap, withLatestFrom, } from "rxjs/operators";
import { CharactersResult, EpisodesResult, Data } from '../interfaces/data.interface';
import { FavoritosService } from './favoritos.service';
import { SpinnerService } from './spinner.service';

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
    private favoritosSvc: FavoritosService,
  ) {
   }

   getPersonaje( idPersonaje:number ){
    const QUERY_BY_ID = gql`
          {
            character(id: ${idPersonaje}) {
              id
              name
              status
              species
              gender
              created
              episode{
                name
              }
              origin{
                name
              }
              location{
                name
              }
              image
            }
          }`

    return this.apollo.watchQuery<any>({
      query: QUERY_BY_ID
    }).valueChanges.pipe(
      take(1)
    );
   }

  getNetxPage( pageNum: number ){    
    const QUERY_BY_PAGE = gql`
          {
            characters(page: ${pageNum}) {
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
    
          this.apollo.watchQuery<any>({
            query: QUERY_BY_PAGE
          }).valueChanges.pipe(
            take(1),
            pluck( 'data', 'characters' ),
            withLatestFrom(this.characters$),
            tap(
              ([apiResponse, characters])=>{
                this.parseNewData([ ...characters!, ...apiResponse.results  ])
              }
            )
          ).subscribe();
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
      return {...char, isFavorite: isFav}
    });

    this.charactersSubject.next( [...newData] );
  }

  filterData( valueToSearch: string ): void{
    const QUERY_BY_NAME = gql`
    query($name: String){
      characters( filter: { name: $name } ){
        info{
          count
        }
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

    this.apollo.watchQuery<Data>({
      query: QUERY_BY_NAME,
      variables:{
        name: valueToSearch
      }
    }).valueChanges.pipe(
      take(1),
      tap( ({data:{ characters, episodes }}) => this.parseNewData([ ...characters.results ]) ),
      catchError( (error) =>{
        this.charactersSubject.next( null );
        return error;
      })
    ).subscribe();
  }


}
