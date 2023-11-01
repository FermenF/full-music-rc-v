import axios from 'axios';
import { SongYoutube } from '../Interfaces/song.interface';

const baseUrl = 'https://full-music-api.fermenf.com/api/v1';
// const baseUrl = 'http://localhost:3335/api/v1';

export async function getSong(songId: string): Promise<Response> {
    try {
        const response = await fetch(`${baseUrl}/download-or-get-song?id=${songId}`);
        return response;
    } catch (error) {
        throw error
    };
};

export async function getListSongs(song_name: string, artist_name: string, duration: number): Promise<SongYoutube> {
    try {
        const response = await axios.get(`${baseUrl}/get-songs-list?song=${song_name}&artist=${artist_name}`);

        if (response.status === 200) {
            const result: SongYoutube[] = response.data;
            const deezer_title = `${song_name} - ${artist_name}`;
            const comparationTitleResult = calculateSimilarTitle(result.slice(0, 5), deezer_title);
            if (comparationTitleResult) {
                return comparationTitleResult;
            } else {
                return compareDurations(result, duration);
            }
        } else {
            throw new Error('Error al obtener la lista de canciones');
        }
    } catch (error) {
        throw error;
    }
}

function compareDurations(songs: SongYoutube[], durationDeezer: number): SongYoutube {
    const timeDifference = 10;
    for (const song of songs) {
        const { duration_raw } = song;
        const durationSongInSeconds = parseDurationToSeconds(duration_raw);
        const durationDeezerInSeconds = parseDurationToSeconds(durationDeezer);
        if (Math.abs(durationSongInSeconds - durationDeezerInSeconds) <= timeDifference) {
            console.log("por duracion");
            return song;
        }
    }
    return songs[0];
}

function parseDurationToSeconds(duration: any): number {
    const [minutes, seconds] = duration.split(':');
    return parseInt(minutes) * 60 + parseInt(seconds);
}

function jaccardSimilarity(set1: Set<string>, set2: Set<string>): number {
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
}

function proccessTitle(title: string): Set<string> {
    return new Set(
        title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f()]/g, "")
            .replace(/\bft\.?\b|\bfeat\.?\b/g, "-")
            .replace(/\boficial\b/g, "")
            .replace(/\bofficial\b/g, "")
            .replace(/\bvideo\b/g, "")
            .replace(/\blyrics\b/g, "")
            .replace(/\bofficial music\b/g, "")
            .replace(/\baudio\b/g, "")
            .replace(/\bletra\b/g, "")
            .replace(/[,;\.]/g, "")
            .split(" ")
            .filter(word => word !== '')
    );
}

function calculateSimilarTitle(songs: SongYoutube[], title2: string): SongYoutube | null {
    for (const song of songs) {
        const set1 = proccessTitle(song.title);
        const set2 = proccessTitle(title2);
        const similitary = jaccardSimilarity(set1, set2);
        if (similitary >= 0.8) {
            console.log(similitary);
            console.log(set1, set2);
            return song;
        }
    }
    return null;
}