import axios from "axios";
import { SongResponse } from "../Interfaces/song.interface";

export const getSongsTopByArtist = async (id: number): Promise<SongResponse> => {
    try {
        return await axios.get<SongResponse>(`https://api.deezer.com/artist/${id}/top`)
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
        return await axios.get<SongResponse>(nextUrl)
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