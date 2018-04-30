import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class MapService {
    constructor(private http: HttpClient) { }

    getMapData() {
        const baseUrl = 'assets/mapdata.json';
        return this.http.get<any>(baseUrl);
    }
}
