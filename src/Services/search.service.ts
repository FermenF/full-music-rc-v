import axios from "axios";
import { SearchResponse } from "../Interfaces/search.interface";
import { basePath } from "../config/api";

export const searchByQuery = async ( params ): Promise<SearchResponse> => {
    try {
        const query:string = params.query;
        console.log(`${ basePath }/search/${ query }`);
        
        return await axios.get<SearchResponse>(`${ basePath }/search?q=${ query }`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};