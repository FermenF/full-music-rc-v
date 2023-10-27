import axios from "axios";
import { SearchResponse } from "../Interfaces/search.interface";


export const searchByQuery = async ( params ): Promise<SearchResponse> => {
    try {
        const query:string = params.query;
        return await axios.get<SearchResponse>(`https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=${ query }`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};