import { Action } from '@ngrx/store';
import { type } from '../redux/utils';

export const ActionTypes = {
    GET_MAP_DATA: type('[map] Get Map Data'),
    GET_MAP_DATA_SUCCESS: type('[map::map-home] Get Map Data Success'),
    GET_MAP_DATA_FAIL: type('[map::map-home] Get Map Data Fail'),
};

export class GetMapData implements Action {
    public type: string = ActionTypes.GET_MAP_DATA;
    constructor(public payload: any) { }
}

export class GetMapDataSuccess implements Action {
    public type: string = ActionTypes.GET_MAP_DATA_SUCCESS;
    constructor(public payload: any) { }
}

export class GetMapDataFail implements Action {
    public type: string = ActionTypes.GET_MAP_DATA_FAIL;
    constructor(public payload: any) { }
}

export type Actions = GetMapData | GetMapDataSuccess | GetMapDataFail;
