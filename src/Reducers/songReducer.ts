import { PlaySong } from "../Interfaces/playSong.interface";

const dataPlayList = window.localStorage.getItem('songs');
const playList = dataPlayList ? JSON.parse(dataPlayList) : []

export interface RootSongState {
    musicReducer: SongState;
}

export interface SongState {
    currentSong: PlaySong | null;
    currentSongIndex: number | null;
    isPlaying: boolean;
    playlist: PlaySong[];
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
    playlist: PlaySong[];
}

interface PlayPrevSoncAction {
    type: 'PREV_SONG';
    song: PlaySong
}

interface PlayNextSongAction {
    type: 'NEXT_SONG';
    song: PlaySong
}

type SongAction = PlaySongAction | PauseSongAction | SetPlaylistAction | PlayPrevSoncAction | PlayNextSongAction;

const initialState: SongState = {
    currentSong: null,
    isPlaying: false,
    currentSongIndex: null,
    playlist: playList,
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
        case 'PREV_SONG':
            const currentSongIndex = state.currentSongIndex ?? 0;
            let newIndexPrev = currentSongIndex - 1;

            if (newIndexPrev < 0) {
                newIndexPrev = state.playlist.length - 1;
            }
            return {
                ...state,
                currentSongIndex: newIndexPrev,
                currentSong: action.song,
                isPlaying: true,
            };
        case 'NEXT_SONG':
            const nextIndex = (state.currentSongIndex ?? -1) + 1;
            const newIndexNext = nextIndex % state.playlist.length;
            return {
                ...state,
                currentSongIndex: newIndexNext,
                currentSong: action.song,
                isPlaying: true,
            };
        default:
            return state;
    }
};

export default songReducer;
