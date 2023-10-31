import { Artist } from "./artist.interface";
import { SongResponse } from "./song.interface";

export interface ShowData {
    artist: Artist;
    country: string | undefined;
    area: string | undefined;
    songs: SongResponse;
}