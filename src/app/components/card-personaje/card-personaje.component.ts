import { Component, Input, OnInit } from '@angular/core';
import { CharactersResult } from '../../interfaces/data.interface';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit {

  @Input() personaje!: CharactersResult;


  constructor(
    private favoritosSvc: FavoritosService
  ) { }

  ngOnInit(): void {
  }

  favoriteToggle(){
    // this.personaje.isFavorite = !this.personaje.isFavorite;
    this.favoritosSvc.toggleFavorito( this.personaje );
    
  }
}
