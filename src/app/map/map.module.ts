import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

// AGM (AngularMaps) Module
import { AgmCoreModule } from '@agm/core';

// ngrx modules
import { StoreModule, } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// MapCompoenent
import { MapComponent } from './map.component';

// Map Reducers
import * as mapReducers from '../map/redux/map.reducers';

// Map Effects
import { MapEffects } from './redux/map.effects';

// Map Service
import { MapService } from './services/map.service';

// HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const providers = [MapService];

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        EffectsModule.forRoot([MapEffects]),
        StoreModule.forFeature('map', mapReducers.reducers),
        StoreModule.forRoot({}),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA6SW5u0cc1VkwmeIhhihwYklseRwzcMAw'
        })
    ],
    providers: providers,
    bootstrap: [MapComponent]
})
export class MapModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MapModule,
            providers: providers
        };
    }
}
