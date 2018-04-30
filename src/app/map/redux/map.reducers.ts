import { Actions, ActionTypes } from './map.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    data?: any;
}

export const initialState: State = {};

export function reducers(state: State = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.GET_MAP_DATA:
            return {
                ...state
            };

        case ActionTypes.GET_MAP_DATA_SUCCESS:
            return {
                ...state,
                data: <any>action.payload
            };


        case ActionTypes.GET_MAP_DATA_FAIL:
            return {
                ...state,
                data: <any>action.payload
            };

        default:
            return state;
    }
}

export const getMapState = createFeatureSelector<State>('map');

export const getState = createSelector(
    getMapState,
    (state: State) => state.data
);
