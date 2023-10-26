import axios from 'axios';
import { SongYoutube } from '../Interfaces/song.interface';

// const baseUrl = 'https://full-music-api.fermenf.com/api/v1';
const baseUrl = 'http://localhost:3333/api/v1';

export async function getSong(songId: string): Promise<Response> {
    try{
        const response = await fetch(`${ baseUrl }/download-or-get-song?id=${ songId }`);
        return response;
    }catch (error) {
        throw error
    };
};

export async function getListSongs(song_name: string, artist_name: string, duration: number): Promise<SongYoutube> 
{
    try {
        const response = await axios.get(`${baseUrl}/get-songs-list?song=${song_name}&artist=${artist_name}`);

        if (response.status === 200) {
            const result: SongYoutube[] = response.data;
            return compareDurations(result, duration);
        } else {
            throw new Error('Error al obtener la lista de canciones');
        }
    } catch (error) {
        throw error;
    }
}

function compareDurations(songs: SongYoutube[], durationDeezer: number): SongYoutube 
{
    const timeDifference = 10;
    for (const song of songs) {
        const { duration_raw } = song;
        const durationSongInSeconds = parseDurationToSeconds(duration_raw);
        const durationDeezerInSeconds = parseDurationToSeconds(durationDeezer);
        if (Math.abs(durationSongInSeconds - durationDeezerInSeconds) <= timeDifference) {
            return song;
        }
    }
    return songs[0];
}

function parseDurationToSeconds(duration:any): number 
{
    const [minutes, seconds] = duration.split(':');
    return parseInt(minutes) * 60 + parseInt(seconds);
}