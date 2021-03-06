import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formBuscar: FormGroup;

  characters$ = this.dataSvc.characters$;
  isLoading = this.spinnerSvc.isLoading$;
  
  wasASearch: boolean = false;

  private pageNum: number = 1;

  constructor(
    private dataSvc: DataService,
    private spinnerSvc: SpinnerService
  ) {
    
    this.formBuscar = new FormGroup({
      queryBuscar: new FormControl('',[
        Validators.required,
        this.trimVelidator
      ])
    })    
   }

  
  ngOnInit(): void {

    this.dataSvc.getData();
  }

  trimVelidator( control: any ){
    if( control.value.trim() === '' ){
      return { trimVelidator: 'En necesario un termino para buscar' };
    }else{
      return null;
    }
  }

  onScroll() {
    if(this.wasASearch){
      return;
    }
    this.pageNum++;
    this.dataSvc.getNetxPage( this.pageNum );

    
  }


  buscar(){
    if(this.formBuscar.controls.queryBuscar.value.trim() === ''){
      return;
    }
    this.dataSvc.filterData(this.formBuscar.controls.queryBuscar.value.trim());
    this.wasASearch = true;
  }

  limpiar(){
    this.dataSvc.getData();
    this.formBuscar.controls.queryBuscar.setValue('');
    this.wasASearch= false;
  }


}
