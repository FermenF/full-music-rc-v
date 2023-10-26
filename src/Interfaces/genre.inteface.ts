export interface Genre {
    id:             number;
    name:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    type:           Type;
};

enum Type {
    Genre = "genre",
};

export interface GenreResponse {
    data: Genre[];
};