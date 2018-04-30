import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map.component';

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA6SW5u0cc1VkwmeIhhihwYklseRwzcMAw'
        })
    ],
    providers: [],
    bootstrap: [MapComponent]
})
export class MapModule { }
