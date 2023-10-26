import axios from "axios";
import { Artist } from "../Interfaces/artist.interface";
import { SongResponse } from "../Interfaces/song.interface";

export const getSongsTopByArtist = async ( id:number ): Promise<SongResponse> => {
    try {
        return await axios.get<SongResponse>(`https://cors-anywhere.herokuapp.com/api.deezer.com/artist/${ id }/top`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};


