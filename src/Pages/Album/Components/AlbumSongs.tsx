import React from "react";
import { Song } from "../../../Interfaces/song.interface";
import { connect, useSelector } from "react-redux";
import { RootSongState } from "../../../Reducers/songReducer";
import { playSong, setPlaylist, setLoadingState } from '../../../actions/songActions';
import { covertDuration, getSongFromYoutube, truncateTitle, updatePlayList } from "../../../Utils/utils";
import { PlaySong } from "../../../Interfaces/playSong.interface";

interface AlbumSongs {
    songs: Song[];
    artist: string;
    playSong: (song: PlaySong) => void;
    setPlaylist: (songs: Song[]) => void;
    setLoadingState: (id: number, isLoading: boolean) => void;
}

const AlbumSongs = ({ songs, artist, playSong, setPlaylist, setLoadingState }) => {

    const statusLoading = useSelector((state: RootSongState) => state.musicReducer.isLoading);

    async function playSongArtist(e, title: string, artist: string, duration: any, image: string, id: number, artistId: number) {
        setLoadingState(id, true);
        e.preventDefault();
        updatePlayList(songs);
        setPlaylist(songs);
        try {
            const data = await getSongFromYoutube(title, artist, duration, image, id, artistId);
            playSong(data);
        } catch (error) {
            throw error;
        }
        setLoadingState(id, false);
    }

    return (
        <div className="p-5 bg-slate-950 text-white">
            <div className="text-left items-center">
                <button type="button" className="bg-green-500 p-3 rounded-full items-center mr-2">
                    <svg className="w-6 h-7 text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                        <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                    </svg>
                </button>
                <button>
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
                    </svg>
                </button>
            </div>
            <div className="mt-3">
                {
                    songs && (songs.map((song, index) => (
                        <div key={ index + 1 } onClick={ (event) => playSongArtist(event, song.title, artist, covertDuration(song.duration), song.album.cover_small, song.id, song.artist.id)}
                            className={`hover-bg-gray-500 pr-3 flex p-2 items-center justify-between cursor-pointer rounded-md ${statusLoading.id === song.id && 'bg-gray-700' } ` }>
                            <div className="md:p-3 flex items-center">
                                <div className="mr-1 md:mr-5 text-gray-300">
                                    {
                                        statusLoading.id === song.id && statusLoading.isLoading === false ? (
                                            <svg className="w-4 h-4 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path d="M10 0A10.011 10.011 0 0 0 0 10v5a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3c-.326.004-.65.062-.957.171a8 8 0 0 1 15.914 0A2.954 2.954 0 0 0 17 9h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3v-5A10.011 10.011 0 0 0 10 0Z" />
                                            </svg>
                                        ) : statusLoading.id === song.id && statusLoading.isLoading === true ? (
                                            <div role="status">
                                                <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="text-left lg:w-10 w-5 lg:text-right"> {
                                                index + 1
                                            } </div>
                                        )
                                    } </div>
                                <img className="img-fluid rounded-md"
                                    src={
                                        song.album.cover_small
                                    }
                                    alt="Album Cover" loading="lazy"/>
                                <div className="ml-3 font-bold sm:block md:hidden">
                                    {
                                        truncateTitle(song.title, 14)
                                    }
                                </div>
                                <div className="ml-3 font-bold md:block hidden">
                                    {
                                        song.title
                                    }
                                </div>
                            </div>
                            <div className="md-p-3 md-mx-3 text-gray-300">
                                {
                                    covertDuration(song.duration)
                                }</div>
                        </div>
                    )))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    // Mapea el estado de Redux que necesites aquí
});

export default connect(mapStateToProps, { playSong, setPlaylist, setLoadingState })(AlbumSongs);
