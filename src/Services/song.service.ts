import axios from "axios";
import { SongResponse } from "../Interfaces/song.interface";
import { basePath } from "../config/api";

export const getSongsTopByArtist = async (id: number): Promise<SongResponse> => {
    try {
        return await axios.get<SongResponse>(`${ basePath }/artist/${id}/top`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};

export const LoadMoreSongs = async (nextUrl: string): Promise<SongResponse> => {
    try {
        const url = extractDynamicPath(nextUrl);
        return await axios.get<SongResponse>(`${ basePath }/load-more/${ url }`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};

const extractDynamicPath = (url: string): string => {
    const baseUrl = "https://api.deezer.com/";
    const dynamicPart = url.replace(baseUrl, "");
    const path = dynamicPart.replace(/\//g, '__').replace(/\?/g, '--param--');
    return path;
};
  