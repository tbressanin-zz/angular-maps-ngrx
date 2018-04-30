import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() { }

  // Title
  defaults = {
    title: 'Angular Maps NGRX Project',
    lat: 51.678418,
    lng: 7.809007
  };

  ngOnInit() {
  }

}
