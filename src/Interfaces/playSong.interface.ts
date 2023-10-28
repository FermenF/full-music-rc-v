export interface PlaySong {
    url:  string;
    info: Info;
}

export interface Info {
    drezzerId: number;
    name:      string;
    title:     string;
    image:     string;
    artistId:  number;
}
