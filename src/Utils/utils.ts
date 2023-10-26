import { useState, useEffect } from 'react';
import { PlaySong } from '../Interfaces/playSong.interface';
import { getListSongs, getSong } from '../Services/youtube.service';
import { SongResponse } from '../Interfaces/song.interface';

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


export function useLoadMoreSongs(tops) {
    const [songs, setSongs] = useState(tops.data); // Inicializa con tops.data en lugar de tops
    const [nextPageUrl, setNextPageUrl] = useState(tops.next);

    const loadMoreSongs = () => {
        if (nextPageUrl) {
            fetch(nextPageUrl)
                .then(response => response.json())
                .then(newSongsData => {
                    setSongs(prevSongs => [...prevSongs, ...newSongsData.data]);
                    setNextPageUrl(newSongsData.next);
                });
        }
    };

    console.log(songs);
    

    return { songs, loadMoreSongs };
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
