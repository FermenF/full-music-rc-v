import axios from "axios";
import { PlayListResponse } from "../Interfaces/playList.interface";
import { basePath } from "../config/api";

export const getPlatListAndTracks = async (params): Promise<PlayListResponse> => {
    try{
        const id:number = params.id;   
        return await axios.get(`${ basePath }/playlist/${ id }`)
            .then((response) => {
                return response.data
            }).catch((error) => {
                throw error;
            });
    }
    catch (error) {
        throw error;
    }
};