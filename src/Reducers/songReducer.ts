import { PlaySong } from "../Interfaces/playSong.interface";
import { Song } from "../Interfaces/song.interface";

const dataPlayList = window.localStorage.getItem('songs');
let playList;

if (dataPlayList) {
    playList = JSON.parse(dataPlayList);
}
export interface RootSongState {
    musicReducer: SongState;
}

export interface SongState {
    currentSong: PlaySong | null;
    currentSongIndex: number | null;
    isPlaying: boolean;
    playlist: Song[];
    isShuffle: boolean;
    isRepeat: boolean;
    isLoading: {
        id: number,
        isLoading: boolean
    }
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

interface PlayPrevSongAction {
    type: 'PREV_SONG';
    song: PlaySong;
}

interface PlayNextSongAction {
    type: 'NEXT_SONG';
    song: PlaySong;
}

interface SetLoadingStateAction {
    type: 'SET_LOADING_STATE';
    payload: { id: number; isLoading: boolean };
}


type SongAction = PlaySongAction | PauseSongAction | SetPlaylistAction | PlayPrevSongAction | PlayNextSongAction | SetLoadingStateAction;

const initialState: SongState = {
    currentSong: null,
    isPlaying: false,
    currentSongIndex: null,
    playlist: playList,
    isShuffle: false,
    isRepeat: false,
    isLoading: {
        id: 0,
        isLoading: false
    }
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
        case 'PREV_SONG':
            const currentSongIndex = state.currentSongIndex ?? 0;
            let newIndexPrev = currentSongIndex - 1;

            if (newIndexPrev < 0) {
                newIndexPrev = (state.playlist?.length ?? 1) - 1;
            }
            return {
                ...state,
                currentSongIndex: newIndexPrev,
                currentSong: action.song,
                isPlaying: true,
            };
        case 'NEXT_SONG':
            const nextIndex = (state.currentSongIndex ?? -1) + 1;
            const newIndexNext = (state.playlist?.length ?? 1) === 0 ? 0 : nextIndex % (state.playlist?.length ?? 1);
            return {
                ...state,
                currentSongIndex: newIndexNext,
                currentSong: action.song,
                isPlaying: true,
            };
            case 'SET_LOADING_STATE':
                return {
                    ...state,
                    isLoading: {
                        id: action.payload.id,
                        isLoading: action.payload.isLoading
                    },
                };
            
        default:
            return state;
    }
};

export default songReducer;
