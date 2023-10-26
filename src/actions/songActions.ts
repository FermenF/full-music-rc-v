import { PlaySong } from "../Interfaces/playSong.interface";
import { Song } from '../Interfaces/song.interface';

// songActions.js
export const playSong = (song: PlaySong) => ({
  type: 'PLAY_SONG',
  song,
});

export const pauseSong = () => ({
  type: 'PAUSE_SONG',
});

export const setPlaylist = (playlist:Song[]) => {
  return {
    type: "SET_PLAYLIST",
    payload: playlist
  };
};
// Define más acciones según sea necesario
