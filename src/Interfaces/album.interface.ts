import { Artist } from "./artist.interface";
import { Song } from "./song.interface";

export interface AlbumResponse {
    data:  Album[];
    total: number;
    next:  string;
}

export interface Album {
    id:                      number;
    title:                   string;
    link:                    string;
    cover:                   string;
    cover_small:             string;
    cover_medium:            string;
    cover_big:               string;
    cover_xl:                string;
    md5_image:               string;
    genre_id:                number;
    fans:                    number;
    release_date:            string;
    record_type:             Type;
    tracklist:               string;
    explicit_lyrics:         boolean;
    type:                    Type;
    upc:                     string;
    share:                   string;
    genres:                  Genres;
    label:                   string;
    nb_tracks:               number;
    duration:                number;
    available:               boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    contributors:            Artist[];
    artist:                  Artist;
    tracks:                  Data;
}

interface Data{
    data: Song[]
}

enum Type {
    Album = "album",
    Single = "single",
}

export interface Genres {
    data: GenreElements[];
}

export interface GenreElements {
    id:         number;
    name:       string;
    picture?:   string;
    type:       string;
}
