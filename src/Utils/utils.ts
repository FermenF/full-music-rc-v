import { PlaySong } from '../Interfaces/playSong.interface';
import { Song } from '../Interfaces/song.interface';
import { getListSongs, getSong } from '../Services/youtube.service';
import { playSong } from '../actions/songActions';
import { RootSongState } from '../Reducers/songReducer';
import { useSelector } from 'react-redux';
import { Search } from 'react-router-dom';


export async function getSongFromYoutube(title: string, artist: string, duration: any, image: string, id: number, artistId: number): Promise<PlaySong> {
    try {
        const response = await getListSongs(title, artist, duration);
        const songResponse = await getSong(response.id);

        const audioBlob = await songResponse.blob();
        const url = URL.createObjectURL(audioBlob);

        return {
            url,
            info: {
                'drezzerId': id,
                'name': artist,
                'title': title,
                'image': image,
                'artistId': artistId
            }
        };

    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    };
};

export async function playSongArtist(title: string, artist: string, duration: any, image: string, id: number, artistId: number) {
    try {
        const data = await getSongFromYoutube(title, artist, duration, image, id, artistId);
        playSong(data);
    } catch (error) { }
}

export function truncateTitle(text: string, maxLength: number): string {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    };
    return text;
};

export function covertDuration(duration: number): string {
    const min = Math.floor(duration / 60);
    const seg = duration % 60;
    return `${min}:${seg}`;
};

export function updatePlayList(songs: any): void {
    window.localStorage.setItem('songs', JSON.stringify(songs));
}

export function getPlayList(): Song[] | Search[] | null {
    const dataSaved = window.localStorage.getItem('songs');
    if (dataSaved) {
        return JSON.parse(dataSaved);
    } else {
        const data = useSelector((state: RootSongState) => state.musicReducer.playlist);
        if (data) {
            return data
        } else {
            return null;
        }
    }
}

export function getNextSong(playList: Song[], id: any, direction: string) {
    const currentSong = playList.find((song) => song.id === id);

    if (currentSong) {
        const currentIndex = playList.indexOf(currentSong);
        if (currentIndex !== -1) {
            let nextIndex;
            if (direction === 'NEXT') {
                nextIndex = (currentIndex + 1) % playList.length;
                
            } else if (direction === 'PREV') {
                if (currentIndex === 0) {
                    nextIndex = playList.length - 1;
                } else {
                    nextIndex = (currentIndex - 1 + playList.length) % playList.length;
                };
            };
            
            return playList[nextIndex];
        };
    };
    return null;
};

export const changeSong = async (playList: Song[] | null, id: number, direction: string) => {
    if (playList) {
        const nextSong = await getNextSong(playList, id, direction);

        if (nextSong) {
            const song = await getSongFromYoutube(nextSong.title,nextSong.artist.name,covertDuration(nextSong.duration),nextSong.album.cover_small,nextSong.id,nextSong.artist.id
            );

            return {
                type: direction + '_SONG',
                song
            };
        };
    };

    return null;
};


