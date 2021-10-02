import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { CharactersResult } from '../../interfaces/data.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

 personaje!:any;

  constructor( private activateRouter: ActivatedRoute,
                private dataSvc: DataService,
                private _location: Location ) { }

  ngOnInit():void {
    this.activateRouter.params.pipe(
      switchMap( ({idPersonaje}) => this.dataSvc.getPersonaje( idPersonaje )  )
    ).subscribe(
      ({ data:{ character } }) => {
        this.personaje = character;
      }
    );    
  }

  regresar(){
    this._location.back();
  }

}
