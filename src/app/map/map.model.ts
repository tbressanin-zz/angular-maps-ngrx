export interface IMapOptions {
    latitude?: number;
    longitude?: number;
    zoom?: number;
    minZoom?: number;
}

export interface IMarkers {
    code: string;
    latitude: number;
    longitude: number;
    avatar: string;
    animation?: string;
}
