import { PlaySong } from "../Interfaces/playSong.interface";
import { Song } from '../Interfaces/song.interface';
import { changeSong} from "../Utils/utils";

export const playSong = (song: PlaySong) => ({ type: 'PLAY_SONG', song });

export const pauseSong = () => ({ type: 'PAUSE_SONG' });

export const setPlaylist = (playlist: Song[]) => {
    return { type: 'SET_PLAYLIST', playlist: playlist };
};

export const setLoadingState = (id:number | null, isLoading:boolean) => ({
    type: 'SET_LOADING_STATE',
    payload: {id, isLoading},
});

export const prevSong = (id: number, playList:Song[]) => {
    return async (dispatch) => {
        const action = await changeSong(playList, id, 'PREV');
        if (action) {
            dispatch(action);
        }
    };
};

export const nextSong = (id: number, playList:Song[]) => {
    return async (dispatch) => {
        const action = await changeSong(playList, id, 'NEXT');
        if (action) {
            dispatch(action);
        }
    };
};

