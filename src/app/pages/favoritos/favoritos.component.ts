import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  favorites$ = this.favoritosSvc.charactersFavorites$;

  constructor(
    private favoritosSvc: FavoritosService
  ) { }

  ngOnInit(): void {

  }

}
