import axios from "axios";
import { Artist } from "../Interfaces/artist.interface";
import { Area, AreaResponse } from "../Interfaces/country.interface";
import { getSongsTopByArtist } from "./song.service";
import { getDataAlbumsByArtist } from "./album.service";
import { SongResponse } from "../Interfaces/song.interface";
import { AlbumResponse } from "../Interfaces/album.interface";

export const getArtist = async ( params ): Promise<{ artist:Artist, country:string | undefined, area:string | undefined, songs:SongResponse, albums:AlbumResponse }> => {
    try {
        const id: number = params.id;

        const artist = await axios.get<Artist>(`https://api.deezer.com/artist/${id}`);
        const name = artist.data.name;

        const dataCountry = await getArtistCountry(name);
        const country = dataCountry.artists[0].country;
        const area = dataCountry.artists[0].area.name;

        const dataSongs = await getSongsTopByArtist(id);
        const dataAlbums = await getDataAlbumsByArtist(id);

        return {
            artist: artist.data,
            country,
            area,
            songs: dataSongs,
            albums: dataAlbums,
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