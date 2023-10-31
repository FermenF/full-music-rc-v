import axios from "axios";
import { ArtistResponse } from "../Interfaces/artist.interface";
import { basePath } from "../config/api";
import { PlayListResponse } from "../Interfaces/playList.interface";

export const getArtistsRelated = async ( id:number ): Promise<ArtistResponse> => {
    try {
        return await axios.get<ArtistResponse>(`${ basePath }/artist/${ id }/related?index=0&limit=2`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};

export const getArtisitPlayList = async ( id:number ): Promise<PlayListResponse> => {
    try {
        return await axios.get(`${ basePath }/artist/${ id }/playlists`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error
            });
    } catch (error) {
        throw error;
    };
};
 
