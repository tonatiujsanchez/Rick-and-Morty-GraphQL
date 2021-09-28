import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  episodes$ = this.dataSvc.episodes$;

  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
  }

}
