import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(){
    this.mostrarMenu =  !this.mostrarMenu;
  }

}
