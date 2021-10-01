import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showButton: boolean = false;

  constructor( @Inject(DOCUMENT) private document: Document ){
    console.log('Hola');
    
  }

  @HostListener('window:scroll')
  onWindowScroll(): void{
    const yOffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    

    this.showButton = ( yOffSet || scrollTop) > 400;
    
  }

  onClick(){
    this.document.documentElement.scrollTop = 0;
  }

}
