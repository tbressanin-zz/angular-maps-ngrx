import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as mapReducers from '../map/redux/map.reducers';
import * as mapActions from '../map/redux/map.actions';
import { IMarkers, IMapOptions } from './map.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private store: Store<mapReducers.State>) { }

  defaults: IMapOptions = {
    latitude: 2.12608,
    longitude: -32.79814,
    zoom: 3,
    minZoom: 3,
  };

  markers: Array<IMarkers> = [];

  ngOnInit() {
    this.setStore();
    this.dispatch();
  }

  setStore() {
    this.store.select(mapReducers.getMapData)
      .subscribe((data: any) => {
        if (data) {
          data.location.map(item => {
            this.markers.push({
              code: item.code,
              latitude: item.latitude,
              longitude: item.longitude,
              avatar: item.avatar
            });
          });
        }
      });
  }

  clickMarker(m) {
    console.log('do anything', m);
  }

  dispatch() {
    this.store.dispatch(new mapActions.GetMapDataAction());
  }
}
