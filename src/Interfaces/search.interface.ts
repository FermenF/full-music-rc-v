import { Album } from "./album.interface";
import { Artist } from "./artist.interface";
import { Song } from './song.interface';

export interface SearchResponse {
    data:  Song[];
    total: number;
    next:  string;
}

export interface Search {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    string;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               string;
    artist:                  Artist;
    album:                   Album;
    type:                    SearchType;
}

export enum SearchType {
    Track = "track",
}
