import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as mapActions from '../redux/map.actions';
import { MapService } from '../services/map.service';


@Injectable()
export class MapEffects {
    constructor(
        private actions: Actions,
        private mapService: MapService
    ) { }

    @Effect()
    public getMapHotel$: Observable<Action> = this.actions
        .ofType(mapActions.ActionTypes.GET_MAP_DATA)
        .switchMap((action: mapActions.GetMapData) => {
            return this.mapService
                .getMapData()
                .map((data: any) => new mapActions.GetMapDataSuccess(data))
                .catch(error =>
                    Observable.of(
                        new mapActions.GetMapDataFail(error)
                    )
                );
        });
}
