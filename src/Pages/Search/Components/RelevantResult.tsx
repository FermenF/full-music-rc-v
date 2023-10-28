import React from "react";
import { covertDuration, getSongFromYoutube, truncateTitle, updatePlayList } from "../../../Utils/utils";
import { playSong, setPlaylist, setLoadingState } from '../../../actions/songActions';
import { SearchResponse } from "../../../Interfaces/search.interface";
import { connect, useSelector } from "react-redux";
import { PlaySong } from "../../../Interfaces/playSong.interface";
import { RootSongState } from "../../../Reducers/songReducer";
import { Link } from "react-router-dom";
import { Song } from "../../../Interfaces/song.interface";

interface RelevantResultProps{
    relevantSong: Song,
    songs: SearchResponse
    playSong: (song: PlaySong) => void;
    setPlaylist: (songs: Song[]) => void;
    setLoadingState: (id:number, isLoading:boolean) => void;
}

const RelevantResult: React.FC<RelevantResultProps> = ({ relevantSong, songs, playSong, setPlaylist, setLoadingState }) => {

    const statusLoading = useSelector((state:RootSongState) => state.musicReducer.isLoading);

    async function playSongArtist(e, title: string, artist: string, duration: any, image: string, id: number, artistId:number) {    
        setLoadingState(id, true);
        try {
            e.preventDefault();
            const playList = songs.data.slice(0, 5);
            updatePlayList(playList);
            setPlaylist(playList);
            const data = await getSongFromYoutube(title, artist, duration, image, id, artistId);
            playSong(data);
        } catch (error) {
            throw error;
        }
        setLoadingState(id, false);
    }

    return (
        <div className="col-span-7 lg:col-span-2 h-full text-white">
            <h1 className="text-2xl text-center lg:text-left lg:text-3xl font-bold mb-5">Most Revelant Result</h1>
            <div className={`${ statusLoading.id === relevantSong.id ? 'bg-gray-700' : 'bg-slate-950' } p-5 pb-7 rounded-md`}>
                <div className="p-5 rounded-md">
                    <img src={
                        relevantSong.album.cover_medium
                    }
                        className="h-28 w-2h-28 rounded-xl"
                        alt="" />
                </div>
                <div className="mx-5">
                    <h1 className="text-2xl lg:text-4xl font-bold wrapper">{ relevantSong.title }</h1>
                    <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-start lg:items-center flex-col lg:flex-row">
                            <Link to={`/dashboard/artists/${ relevantSong.artist.id }/${ relevantSong.artist.name.replace('/', '|') }`}
                                className="hover:underline text-blue-200">{relevantSong.artist.name}</Link>
                            <span className="font-semibold lg:ml-2 bg-blue-500 p-1 lg:p-2 px-3.5 rounded-2xl mt-1">
                                {truncateTitle(relevantSong.type, 20)}
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="mr-2">{ covertDuration(relevantSong.duration) }</span>
                            <button type="button" className="bg-green-500 p-3 py-2.5 rounded-full text-center hover:bg-gray-400"
                                onClick={
                                    (event) => playSongArtist(
                                        event,
                                        relevantSong.title,
                                        relevantSong.artist.name,
                                        covertDuration(relevantSong.duration),
                                        relevantSong.album.cover_small,
                                        relevantSong.id,
                                        relevantSong.artist.id
                                    )
                                }>
                                {
                                    statusLoading.id === relevantSong.id && statusLoading.isLoading === true ? (
                                        <div role="status">
                                            <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : statusLoading.id === relevantSong.id && statusLoading.isLoading === false ? (
                                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M10 0A10.011 10.011 0 0 0 0 10v5a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3c-.326.004-.65.062-.957.171a8 8 0 0 1 15.914 0A2.954 2.954 0 0 0 17 9h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3v-5A10.011 10.011 0 0 0 10 0Z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.111 5.889a5.888 5.888 0 0 1 0 6.222M17.173 2.7A11.372 11.372 0 0 1 19 9a11.4 11.4 0 0 1-1.777 6.222M9.349 1.415 4 6H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2l5.349 4.585A1 1 0 0 0 11 15.826V2.174a1 1 0 0 0-1.651-.759Z" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    // Mapea el estado de Redux que necesites aquí
});

export default connect(mapStateToProps, { playSong, setPlaylist, setLoadingState })(RelevantResult);
