export interface AlbumResponse {
    data:  Album[];
    total: number;
    next:  string;
}

export interface Album {
    id:              number;
    title:           string;
    link:            string;
    cover:           string;
    cover_small:     string;
    cover_medium:    string;
    cover_big:       string;
    cover_xl:        string;
    md5_image:       string;
    genre_id:        number;
    fans:            number;
    release_date:    string;
    record_type:     Type;
    tracklist:       string;
    explicit_lyrics: boolean;
    type:            Type;
}

enum Type {
    Album = "album",
    Single = "single",
}
