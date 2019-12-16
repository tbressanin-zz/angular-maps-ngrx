import { Action } from '@ngrx/store';
import { type } from '../redux/utils';

export const ActionTypes = {
    GET_MAP_DATA: type('[map] Get Map Data'),
    GET_MAP_DATA_SUCCESS: type('[map] Get Map Data Success'),
    GET_MAP_DATA_FAIL: type('[map] Get Map Data Fail'),
};

export class GetMapDataAction implements Action {
    public type: string = ActionTypes.GET_MAP_DATA;
    constructor(public payload?: any) { }
}

export class GetMapDataSuccessAction implements Action {
    public type: string = ActionTypes.GET_MAP_DATA_SUCCESS;
    constructor(public payload?: any) {
    }
}

export class GetMapDataFailAction implements Action {
    public type: string = ActionTypes.GET_MAP_DATA_FAIL;
    constructor(public payload?: any) { }
}

export type Actions = GetMapDataAction | GetMapDataSuccessAction | GetMapDataFailAction;
