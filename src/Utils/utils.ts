import { PlaySong } from '../Interfaces/playSong.interface';
import { SongResponse, Song } from '../Interfaces/song.interface';
import { getListSongs, getSong } from '../Services/youtube.service';
import { playSong } from '../actions/songActions';

export async function getSongFromYoutube(title: string, artist: string, duration: any, image: string, id: number): Promise<PlaySong>
{
    try {
        const response = await getListSongs(title, artist, duration);
        const songResponse = await getSong(response.id);
        
        const audioBlob = await songResponse.blob();
        const url = URL.createObjectURL(audioBlob);
        
        return { url, info: { 'drezzerId': id, 'name': artist, 'title': title, 'image': image }};

    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    };
};

export async function playSongArtist(title: string, artist: string, duration: any, image: string, id: number){
    try {
        const data = await getSongFromYoutube(title, artist, duration, image, id);
        playSong(data);
    } catch (error) {
    }
}

export function truncateTitle(text:string, maxLength:number): string 
{
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    };
    return text;
};

export function covertDuration(duration:number): string
{
    const min = Math.floor(duration / 60);
    const seg = duration % 60;
    return `${min}:${seg}`;
};

export function updateOrSaveSongs(songs:any): void
{
    window.localStorage.setItem('songs', JSON.stringify(songs));
}

export const changeSong = async (playList:Song[], id:number, direction:string) => {
    const currentSong = playList.find((song) => song.id === id);
    if (currentSong) {
        const currentIndex = playList.indexOf(currentSong);
        let nextIndex;
        
        if (direction === 'NEXT') {
            nextIndex = (currentIndex + 1) % playList.length;
        } else if (direction === 'PREV') {
            nextIndex = (currentIndex - 1 + playList.length) % playList.length;
        }

        const nextSong = playList[nextIndex];
        const song = await getSongFromYoutube(nextSong.title, nextSong.artist.name, covertDuration(nextSong.duration), nextSong.album.cover_small, nextSong.id);

        return { type: direction + '_SONG', song };
    }
    return null;
};