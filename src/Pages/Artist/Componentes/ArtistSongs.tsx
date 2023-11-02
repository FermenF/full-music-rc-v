import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { playSong, setPlaylist, setLoadingState } from '../../../actions/songActions.js';
import { getSongFromYoutube, truncateTitle, convertDuration, updatePlayList } from '../../../Utils/utils.js';
import { Song, SongResponse } from '../../../Interfaces/song.interface.js';
import { PlaySong } from '../../../Interfaces/playSong.interface.js';
import { LoadMoreSongs } from '../../../Services/song.service.js';
import { RootSongState } from '../../../Reducers/songReducer.js';

interface ArtistSongsProps {
    tops: SongResponse;
    artist: string;
    playSong: (song: PlaySong) => void;
    setPlaylist: (songs: Song[]) => void;
    setLoadingState: (id:number, isLoading:boolean) => void;
}

const ArtistSongs: React.FC<ArtistSongsProps> = ({ tops, artist, playSong, setPlaylist, setLoadingState }) => {
    const [songs, setSongs] = useState(tops.data);
    const [nextUrl, setNextUrl] = useState(tops.next);
    const [noUpdatePL, setNoUpdatePL] = useState(true);
    const statusLoading = useSelector((state:RootSongState) => state.musicReducer.isLoading);

    async function playSongArtist(e, title: string, artist: string, duration: any, image: string, id: number, artistId: number) {
        setLoadingState(id, true);
        e.preventDefault();
        const playList = songs;
        updatePlayList(playList);
        setPlaylist(playList);
        setNoUpdatePL(false);
        
        try {
            const data = await getSongFromYoutube(title, artist, duration, image, id, artistId);
            playSong(data);
        } catch (error) {
            throw error;
        }
        setLoadingState(id, false);
    }

    const handleLoadMoreSongs = async () => {
        try {
            if (tops.next) {
                const moreSongs = await LoadMoreSongs(nextUrl);
                const updatedPlaylist = [...songs, ...moreSongs.data];
                setSongs(updatedPlaylist);
                setNextUrl(moreSongs.next);
                if (noUpdatePL == false) {
                    updatePlayList(updatedPlaylist);
                    setPlaylist(updatedPlaylist);
                }
            };
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        setSongs(tops.data);
        setNextUrl(tops.next)
    }, [artist, tops]);

    return (
        <div className="w-full p-5 bg-slate-950">
            <div className="text-white">
                <h1 className="font-extrabold text-2xl">Popular</h1>
                <div className="mt-3">
                    {
                        songs && (
                            songs.map((top, index) => (
                                <div key={index + 1} onClick={(event) => playSongArtist(
                                    event,
                                    top.title,
                                    artist,
                                    convertDuration(top.duration),
                                    top.album.cover_small,
                                    top.id,
                                    top.artist.id
                                )}
                                    className={`hover-bg-gray-500 p-3 flex items-center justify-between cursor-pointer rounded-md my-3 
                                    ${statusLoading.id === top.id && 'bg-gray-800'} `}>
                                    <div className="md:p-3 flex items-center">
                                        <div className="md:ml-3 mr-1 md:mr-5 text-gray-300">
                                            {
                                                statusLoading.id === top.id && statusLoading.isLoading === false ? (
                                                    <svg className="w-4 h-4 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                        <path d="M10 0A10.011 10.011 0 0 0 0 10v5a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3c-.326.004-.65.062-.957.171a8 8 0 0 1 15.914 0A2.954 2.954 0 0 0 17 9h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3v-5A10.011 10.011 0 0 0 10 0Z" />
                                                    </svg>
                                                ) : statusLoading.id === top.id && statusLoading.isLoading === true ? (
                                                    <div role="status">
                                                        <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div className="w-5 flex items-center">
                                                        {index + 1}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <img className="img-fluid rounded-md" src={top.album.cover_small} alt="Album Cover" />
                                        <div className="ml-3 font-bold md-hidden">{truncateTitle(top.title, 29)}</div>
                                        <div className="ml-3 font-bold hidden sm-block">{top.title}</div>
                                    </div>
                                    <div className="md-p-3 md-mx-3 text-gray-300">{convertDuration(top.duration)}</div>
                                </div>
                            ))
                        )
                    }
                </div>
                {nextUrl && (
                    <div className="text-gray-300 flex justify-center lg:justify-start px-5 mt-2">
                        <button type="button" className="flex items-center bg-gray-800 p-2 px-5 rounded-2xl hover-bg-gray-700" onClick={handleLoadMoreSongs}>
                            <div>
                                View More
                            </div>
                            <svg className="w-4 h-4 ml-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    // Mapea el estado de Redux que necesites aquí
});

export default connect(mapStateToProps, { playSong, setPlaylist, setLoadingState })(ArtistSongs);