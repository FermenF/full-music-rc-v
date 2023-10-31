import axios from "axios";
import { Artist, ArtistResponse } from "../Interfaces/artist.interface";
import { AreaResponse } from "../Interfaces/country.interface";
import { getSongsTopByArtist } from "./song.service";
import { SongResponse } from "../Interfaces/song.interface";
import { basePath } from "../config/api";

export const getArtist = async ( params ): 
    Promise<{ artist:Artist, country:string | undefined, area:string | undefined, songs:SongResponse }> => {
    try {
        const id: number = params.id;

        //DZ
        const artist = await axios.get<Artist>(`${ basePath }/artist/${id}`);
        const name = artist.data.name;

        // MB
        const dataCountry = await getArtistCountry(name);
        const country = dataCountry.artists[0]?.country;
        
        const area = dataCountry.artists[0].area?.name;
        //DZ
        const dataSongs = await getSongsTopByArtist(id);

        return {
            artist: artist.data,
            country,
            area,
            songs: dataSongs,
        };
    } catch (error) {
        throw error;
    }
};

const getArtistCountry = async ( name:string ): Promise<AreaResponse> => {
    try {
        return await axios.get(`http://musicbrainz.org/ws/2/artist/?query=artist:${ name }%20AND%alias:${ name }%20AND%sort-name:${ name }`, {
            headers: {
                'Accept': 'application/json',
            }
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });

    } catch (error) {
        throw error;
    }
};
