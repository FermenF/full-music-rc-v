import { Album } from "./album.interface";
import { Artist } from "./artist.interface";
import { Contributor } from "./contributos.interface";

export interface Song {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    contributors:            Contributor[];
    md5_image:               string;
    artist:                  Artist;
    album:                   Album;
    type:                    string;
    timesPlayed:             number;
};

export interface SongResponse {
    data:  Song[];
    total: number;
    next:  string;
};

export interface SongYoutube {
    description:  string;
    duration:     number;
    duration_raw: string;
    uploaded:     string;
    views:        number;
    channel:      ChannelYoutube;
    id:           string;
    link:         string;
    thumbnail:    string;
    title:        string;
    shareLink:    string;
    blob?:        any;
};

export interface ChannelYoutube {
    name:     string;
    link:     string;
    verified: boolean;
};
