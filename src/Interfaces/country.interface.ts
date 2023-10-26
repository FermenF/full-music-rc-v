import { Artist } from "./artist.interface";

export interface AreaResponse {
    created: Date;
    count:   number;
    offset:  number;
    artists: Artist[];
}

export interface Area {
    id:          string;
    "type-id":   string;
    name?:        string;
    "sort-name": string;
    type:        AreaType;
    "life-span": AreaLifeSpan;
}

export interface AreaLifeSpan {
    ended: null;
}

export enum AreaType {
    City = "City",
    Country = "Country",
    Subdivision = "Subdivision",
}
