import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { BehaviorSubject } from 'rxjs';
import { take, tap } from "rxjs/operators";
import { CharactersResult, EpisodesResult, Data } from '../interfaces/data.interface';

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
    private apollo: Apollo
  ) { 
    this.getData()
  }



  private getData():void{
    this.apollo.watchQuery<Data>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap( ({data:{ characters, episodes }}) => {

        this.charactersSubject.next( characters.results );
        this.episodeSubject.next( episodes.results );
      
      })
    ).subscribe();
  }
}
