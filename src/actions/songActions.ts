import { PlaySong } from "../Interfaces/playSong.interface";

// songActions.js
export const playSong = (song: PlaySong) => ({
  type: 'PLAY_SONG',
  song,
});

export const pauseSong = () => ({
  type: 'PAUSE_SONG',
});

// Define más acciones según sea necesario
