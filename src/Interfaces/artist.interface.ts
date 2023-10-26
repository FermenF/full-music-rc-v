import { Area } from "./country.interface";

export interface Artist {
    id:             number;
    nb_album:       number;
    name:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    country?:       string;
    radio:          boolean;
    type:           Type;
    area:           Area;
}

enum Type {
    Artist = "artist",
}

export interface ArtistResponse {
    data: Artist[];
}