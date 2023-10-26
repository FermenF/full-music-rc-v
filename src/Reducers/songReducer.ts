import { PlaySong } from "../Interfaces/playSong.interface";

export interface RootSongState {
    musicReducer: SongState;
}

export interface SongState {
    currentSong: PlaySong | null; 
    isPlaying: boolean;
    playlist: PlaySong[] | null;
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

type SongAction = PlaySongAction | PauseSongAction;

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
        default:
            return state;
    }
};

export default songReducer;
