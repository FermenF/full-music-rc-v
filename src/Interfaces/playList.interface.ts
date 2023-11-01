import { Album } from "./album.interface";
import { Artist } from "./artist.interface";
import { Song } from "./song.interface";

export interface PlayListResponse {
    data:  PlayList[];
    total: number;
    checksum: string;
    next:  string;
    id:             string;
    title:          string;
    description:    string;
    duration:       number;
    public:         boolean;
    is_loved_track: boolean;
    collaborative:  boolean;
    nb_tracks:      number;
    fans:           number;
    link:           string;
    share:          string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    creation_date:  Date;
    md5_image:      string;
    picture_type:   string;
    creator:        Creator;
    type:           string;
    tracks:         Tracks;
}

export interface PlayList {
    id:                      number;
    readable:                boolean;
    title:                   string;
    description:             string;
    title_short:             string;
    title_version:           string;
    isrc:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    time_add:                number;
    artist:                  Artist;
    album:                   Album;
    public:                  boolean;
    link:                    string;
    picture:                 string;
    picture_small:           string;
    picture_medium:          string;
    picture_big:             string;
    picture_xl:              string;
    checksum:                string;
    tracklist:               string;
    creation_date:           string;
    md5_image:               string;
    picture_type:            string;
    user:                    string;
    type:                    string;
    tracks:                  Tracks;
    is_loved_track:          boolean;
    collaborative:           boolean;
    nb_tracks:               number;
    fans:                    number;
    share:                   string;
    creator:                 Creator;
}

export interface Creator {
    id:        string;
    name:      string;
    tracklist: string;
    type:      CreatorType;
    link?:     string;
}

export enum CreatorType {
    Artist = "artist",
    User = "user",
}

export interface Tracks {
    data:     Song[];
    checksum: string;
}

