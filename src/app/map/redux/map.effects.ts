import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';


import * as mapActions from '../redux/map.actions';
import { MapService } from '../services/map.service';


@Injectable()
export class MapEffects {
    constructor(
        private actions: Actions,
        private mapService: MapService
    ) { }

    @Effect()
    public getMapData$: Observable<Action> = this.actions
        .ofType(mapActions.ActionTypes.GET_MAP_DATA)
        .pipe(switchMap((action: mapActions.GetMapDataAction) => {
            return this.mapService
                .getMapData()
                .pipe(map((data: any) => new mapActions.GetMapDataSuccessAction(data))
                    , catchError(error =>
                        of(
                            new mapActions.GetMapDataFailAction(error)
                        )
                    )
                );
        })
        );
}
