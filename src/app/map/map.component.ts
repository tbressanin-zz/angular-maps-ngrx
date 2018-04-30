import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as mapReducers from '../map/redux/map.reducers';
import * as mapActions from '../map/redux/map.actions';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private store: Store<mapReducers.State>) {
  }

  // Title
  defaults = {
    title: 'Angular Maps NGRX Project',
    lat: 51.678418,
    lng: 7.809007
  };

  ngOnInit() {
  }

}
