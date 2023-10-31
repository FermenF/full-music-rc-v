export interface PlayListResponse {
    data:  PlayList[];
    total: number;
    next:  string;
}

export interface PlayList {
    id:             number;
    title:          string;
    public:         boolean;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    checksum:       string;
    tracklist:      string;
    creation_date:  Date;
    md5_image:      string;
    picture_type:   PictureTypeEnum;
    user:           string;
    type:           PictureTypeEnum;
}

export enum PictureTypeEnum {
    Playlist = "playlist",
}
