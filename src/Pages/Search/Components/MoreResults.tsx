import React from "react";
import { covertDuration, getSongFromYoutube, truncateTitle, updatePlayList } from "../../../Utils/utils";
import { SearchResponse } from "../../../Interfaces/search.interface";
import { playSong, setPlaylist } from "../../../actions/songActions";
import { PlaySong } from "../../../Interfaces/playSong.interface";
import { connect, useSelector } from "react-redux";
import { RootSongState } from "../../../Reducers/songReducer";
import { Song } from '../../../Interfaces/song.interface';
import { Search } from "react-router-dom";

interface MoreResultProps {
    data: SearchResponse;
    playSong: (song: PlaySong) => void;
    setPlaylist: (songs: Song[] | Search) => void;
}

const MoreResults: React.FC<MoreResultProps> = ({ data, playSong, setPlaylist }) => {

    const song = useSelector((state: RootSongState) => state.musicReducer.currentSong);
    const songs = data.data;
 
    async function playSongArtist(e, title: string, artist: string, duration: any, image: string, id: number, artistId:number) {
        try {
            e.preventDefault();
            const playList = songs.slice(0, 5);
            updatePlayList(playList);
            setPlaylist(playList);
            const data = await getSongFromYoutube(title, artist, duration, image, id, artistId);
            playSong(data);
        } catch (error) {
        }
    }

    return (
        <div className="col-span-7 lg:col-span-5 lg:col-start-3 text-white">
            <h1 className="text-2xl text-left lg:text-left  lg:text-3xl font-bold mb-5">Songs</h1>
            <div className="mt-3">
                {songs ? (
                    songs.slice(1, 5).map((songData, index) => (
                        <div key={index + 1}
                            onClick={(event) => playSongArtist(
                                event,
                                songData.title,
                                songData.artist.name,
                                covertDuration(songData.duration),
                                songData.album.cover_small,
                                songData.id,
                                songData.artist.id
                            )}
                            className={`hover:bg-gray-500 p-1 flex items-center justify-between cursor-pointer rounded-md my-3 ${song && song.info && song.info.drezzerId === songData.id && "bg-gray-500"}`}>
                            <div className="md:p-1 flex items-center">
                                <div className="md:ml-3 mr-1 md:mr-5 text-gray-300">{index + 1}</div>
                                <img className="img-fluid rounded-md h-10 w-10" src={songData.album.cover_small} alt="Album Cover" />
                                <div className="ml-3 font-bold md:hidden">
                                    {truncateTitle(songData.title, 29)}
                                    <div>
                                        <span className="text-gray-400 font-light">{ songData.artist.name }</span>
                                    </div>
                                </div>
                                <div className="ml-3 font-bold hidden sm:block">
                                    {songData.title}
                                    <div>
                                        <span className="text-gray-400 font-light">{ songData.artist.name }</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-3 md:mx-3 text-gray-300">{covertDuration(songData.duration)}</div>
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
export default connect(mapStateToProps, { playSong, setPlaylist })(MoreResults);
