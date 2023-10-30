import axios from "axios";
import { GenreResponse } from '../Interfaces/genre.inteface';
import { ArtistResponse } from '../Interfaces/artist.interface';
import { basePath } from "../config/api";

export const getGenres = async (): Promise<GenreResponse> => {
    try {
        return await axios.get<GenreResponse>(`${ basePath }/genre`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error
    }
};

export const getArtistsByGenre = async ( params ): Promise<ArtistResponse> => {
    try {
        const id:number = params.id;
        return await axios.get<ArtistResponse>(`${ basePath }/genre/${ id }/artists`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};
