import axios from "axios";
import { Album, AlbumResponse } from "../Interfaces/album.interface";
import { basePath } from "../config/api";

export const getDataAlbumsByArtist = async (id: number): Promise<AlbumResponse> => {
    try {
        return await axios.get<AlbumResponse>(`${ basePath }/artist/${id}/albums`)
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
        return await axios.get<Album>(`${ basePath }/album/${ id }`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
}