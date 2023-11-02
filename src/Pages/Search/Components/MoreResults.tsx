import React from "react";
import { convertDuration, getSongFromYoutube, truncateTitle, updatePlayList } from "../../../Utils/utils";
import { SearchResponse } from "../../../Interfaces/search.interface";
import { playSong, setPlaylist, setLoadingState } from "../../../actions/songActions";
import { PlaySong } from "../../../Interfaces/playSong.interface";
import { connect, useSelector } from "react-redux";
import { RootSongState } from "../../../Reducers/songReducer";
import { Song } from '../../../Interfaces/song.interface';
import { Search } from "react-router-dom";

interface MoreResultProps {
    data: SearchResponse;
    playSong: (song: PlaySong) => void;
    setPlaylist: (songs: Song[] | Search) => void;
    setLoadingState: (id:number, isLoading:boolean) => void;
}

const MoreResults: React.FC<MoreResultProps> = ({ data, playSong, setPlaylist, setLoadingState }) => {

    const statusLoading = useSelector((state: RootSongState) => state.musicReducer.isLoading);
    const songs = data.data;
    const playList = songs.slice(0, 5);

    async function playSongArtist(e, title: string, artist: string, duration: any, image: string, id: number, artistId: number) {
        setLoadingState(id, true);
        try {
            e.preventDefault();
            updatePlayList(playList);
            setPlaylist(playList);
            const data = await getSongFromYoutube(title, artist, duration, image, id, artistId);
            playSong(data);
        } catch (error) {
        }
        setLoadingState(id, false);
    }

    return (
        <div className="col-span-7 lg:col-span-5 lg:col-start-3 text-white">
            <h1 className="text-2xl text-left lg:text-left flex lg:text-3xl font-bold mb-5">Songs</h1>
            <div className="mt-3">
                {songs ? (
                    songs.slice(1, 5).map((songData, index) => (
                        <div key={index + 1}
                            onClick={(event) => playSongArtist(
                                event,
                                songData.title,
                                songData.artist.name,
                                convertDuration(songData.duration),
                                songData.album.cover_small,
                                songData.id,
                                songData.artist.id
                            )}
                            className={`hover:bg-gray-500 p-1 flex items-center justify-between cursor-pointer rounded-md my-3 ${statusLoading && statusLoading.id === songData.id && "bg-gray-500"}`}>
                            <div className="md:p-1 flex items-center">
                                <div className="md:ml-3 mr-1 md:mr-5 text-gray-300">
                                    {
                                        statusLoading.id === songData.id && statusLoading.isLoading === false ? (
                                            <svg className="w-4 h-4 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path d="M10 0A10.011 10.011 0 0 0 0 10v5a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3c-.326.004-.65.062-.957.171a8 8 0 0 1 15.914 0A2.954 2.954 0 0 0 17 9h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3v-5A10.011 10.011 0 0 0 10 0Z" />
                                            </svg>
                                        ) : statusLoading.id === songData.id && statusLoading.isLoading === true ? (
                                            <div role="status">
                                                <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        ) : (
                                            <div>
                                                {index + 1}
                                            </div>
                                        )
                                    }
                                </div>
                                <img className="img-fluid rounded-md h-10 w-10" src={songData.album.cover_small} alt="Album Cover" />
                                <div className="ml-3 font-bold md:hidden">
                                    {truncateTitle(songData.title, 29)}
                                    <div>
                                        <span className="text-gray-400 font-light">{songData.artist.name}</span>
                                    </div>
                                </div>
                                <div className="ml-3 font-bold hidden sm:block">
                                    {songData.title}
                                    <div>
                                        <span className="text-gray-400 font-light">{songData.artist.name}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-3 md:mx-3 text-gray-300">{convertDuration(songData.duration)}</div>
                        </div>
                    ))
                ) : (
                    <p>Cargando canciones...</p>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    // Mapea el estado de Redux que necesites aquí
});

// @ts-ignore
export default connect(mapStateToProps, { playSong, setPlaylist, setLoadingState })(MoreResults);
