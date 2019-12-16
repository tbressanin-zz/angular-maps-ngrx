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

  positionA: { latitude: number, longitude: number };
  positionB: { latitude: number, longitude: number };

  distancePoints: number;

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
        if (!!data) {
          console.log(data);
          data.location.map(item => {
            this.markers.push({
              code: item.code,
              latitude: item.latitude,
              longitude: item.longitude,
              avatar: item.avatar,
              animation: 'DROP'
            });
          });
        }
      });
  }

  clickMarker(m: IMarkers) {
    m.animation = 'BOUNCE';
    this.positionA = {
      latitude: m.latitude,
      longitude: m.longitude
    };
    if (!!this.positionA.latitude && !!this.positionA.longitude && !!this.positionB.latitude && !!this.positionB.longitude) {
      this.distancePoints = this.calculateDistance(this.positionA, this.positionB);
    }
  }


  checkDistance($event) {
    this.markers.push({
      code: 'click',
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
      avatar: null,
      animation: 'DROP'
    });

    this.positionB = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng
    };

    if (!!this.positionA.latitude && !!this.positionA.longitude && !!this.positionB.latitude && !!this.positionB.longitude) {
      this.distancePoints = this.calculateDistance(this.positionA, this.positionB);
    }
    console.log('$event', this.positionA, this.positionB);
  }

  calculateDistance(posA: any, posB: any) {
    if ((posA === posB) && (posA === posB)) {
      return 0;
    } else {
      const radlat1 = Math.PI * posA.latitude / 180;
      const radlat2 = Math.PI * posB.latitude / 180;

      const theta = posA.longitude - posB.longitude;

      const radtheta = Math.PI * theta / 180;

      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344; // Calculo distancia em Km

      return dist;
    }
  }

  resetAnimation() {
    this.markers.map(item => item.animation = null);
  }

  dispatch() {
    this.store.dispatch(new mapActions.GetMapDataAction());
  }
}
