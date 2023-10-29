import axios from "axios";
import { Album, AlbumResponse } from "../Interfaces/album.interface";

export const getDataAlbumsByArtist = async (id: number): Promise<AlbumResponse> => {
    try {
        return await axios.get<AlbumResponse>(`https://api.deezer.com/artist/${id}/albums`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};

export const getAlbum = async ( params ): Promise<Album> => {
    try {
        const id:number = params.id;
        return await axios.get<Album>(`https://api.deezer.com/album/${ id }`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
}