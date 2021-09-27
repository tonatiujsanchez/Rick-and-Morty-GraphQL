import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formBuscar: FormGroup;
  constructor() {
    this.formBuscar = new FormGroup({
      queryBuscar: new FormControl('',[
        Validators.required,
        this.trimVelidator
      ])
    })
   }

  ngOnInit(): void {
  }

  trimVelidator( control: any ){

    if( control.value.trim() === '' ){
      return { trimVelidator: 'En necesario un termino para buscar' };
    }else{
      return null;
    }
  }


  buscar(){
    console.log( this.formBuscar.controls.queryBuscar.value.trim() );
  }

}
