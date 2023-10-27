import { Dispatch } from "redux";
import { PlaySong } from "../Interfaces/playSong.interface";
import { Song } from '../Interfaces/song.interface';
import { changeSong } from "../Utils/utils";

const songs = window.localStorage.getItem('songs');
const playList: Song[] = JSON.parse(songs || '[]');

export const playSong = (song: PlaySong) => ({ type: 'PLAY_SONG', song });

export const pauseSong = () => ({ type: 'PAUSE_SONG' });

export const setPlaylist = (playlist: Song[]) => {
    return { type: 'SET_PLAYLIST', payload: playlist };
};

export const prevSong = (id: number) => {
    return async (dispatch:Dispatch) => {
        const action = await changeSong(playList, id, 'PREV');
        if (action) {
            dispatch(action);
        }
    };
};

export const nextSong = (id: number) => {
    return async (dispatch:Dispatch) => {
        const action = await changeSong(playList, id, 'NEXT');
        if (action) {
            dispatch(action);
        }
    };
};

