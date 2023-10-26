import { PlaySong } from "../Interfaces/playSong.interface";
import { Song } from "../Interfaces/song.interface";

export interface RootSongState {
    musicReducer: SongState;
}

export interface SongState {
    currentSong: PlaySong | null; 
    isPlaying: boolean;
    playlist: Song[];
    isShuffle: boolean;
    isRepeat: boolean;
}

interface PlaySongAction {
    type: 'PLAY_SONG';
    song: PlaySong; 
}

interface PauseSongAction {
    type: 'PAUSE_SONG';
}

interface SetPlaylistAction {
    type: 'SET_PLAYLIST';
    playlist: Song[];
}

type SongAction = PlaySongAction | PauseSongAction | SetPlaylistAction;

const initialState: SongState = {
    currentSong: null,
    isPlaying: false,
    playlist: [],
    isShuffle: false,
    isRepeat: false,
};

const songReducer = (state: SongState = initialState, action: SongAction): SongState => {
    switch (action.type) {
        case 'PLAY_SONG':
            return {
                ...state,
                currentSong: action.song,
                isPlaying: true,
            };
        case 'PAUSE_SONG':
            return {
                ...state,
                isPlaying: false,
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist,
            };
        default:
            return state;
    }
};

export default songReducer;
