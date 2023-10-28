import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { playSong, setPlaylist } from '../../../actions/songActions.js';
import { getSongFromYoutube, truncateTitle, covertDuration, updatePlayList } from '../../../Utils/utils.js';
import { Song, SongResponse } from '../../../Interfaces/song.interface.js';
import { PlaySong } from '../../../Interfaces/playSong.interface.js';
import { LoadMoreSongs } from '../../../Services/song.service.js';
import { RootSongState } from '../../../Reducers/songReducer.js';

interface ArstistSongsProps {
    tops: SongResponse;
    artist: string;
    playSong: (song: PlaySong) => void;
    setPlaylist: (songs: Song[]) => void;
}

const ArtistSongs: React.FC<ArstistSongsProps> = ({ tops, artist, playSong, setPlaylist }) => {

    const [songs, setSongs] = useState(tops.data);
    const [nextUrl, setNextUrl] = useState(tops.next);
    const [noUpdatePL, setNoUpdatePL] = useState(true);
    const song = useSelector((state: RootSongState) => state.musicReducer.currentSong?.info.drezzerId);

    async function playSongArtist(e, title: string, artist: string, duration: any, image: string, id: number, artistId:number) {
        try {
            e.preventDefault();
            const playList = songs;
            updatePlayList(playList);
            setPlaylist(playList);
            setNoUpdatePL(false);
            const data = await getSongFromYoutube(title, artist, duration, image, id, artistId);
            playSong(data);
        } catch (error) {
        };
    };
    
    const handleLoadMoreSongs = async () => {
        try {
            if (tops.next) {
                const moreSongs = await LoadMoreSongs(nextUrl);
                const updatedPlaylist = [...songs, ...moreSongs.data];     
                setSongs(updatedPlaylist);
                setNextUrl(moreSongs.next);
                if(noUpdatePL == false){
                    updatePlayList(updatedPlaylist);
                    setPlaylist(updatedPlaylist);
                }
            };
        } catch (error) {
            throw error;
        }
    };  

    return (
        <div className="w-full mb-5">
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
                                    covertDuration(top.duration),
                                    top.album.cover_small,
                                    top.id,
                                    top.artist.id
                                )}
                                    className={`hover-bg-gray-500 p-3 flex items-center justify-between cursor-pointer rounded-md my-3 
                                    ${ song === top.id && 'bg-gray-800'} `}>
                                    <div className="md:p-3 flex items-center">
                                        <div className="md:ml-3 mr-1 md:mr-5 text-gray-300">{index + 1}</div>
                                        <img className="img-fluid rounded-md" src={top.album.cover_small} alt="Album Cover" />
                                        <div className="ml-3 font-bold md-hidden">{truncateTitle(top.title, 29)}</div>
                                        <div className="ml-3 font-bold hidden sm-block">{top.title}</div>
                                    </div>
                                    <div className="md-p-3 md-mx-3 text-gray-300">{covertDuration(top.duration)}</div>
                                </div>
                            ))
                        )
                    }
                </div>
                {nextUrl && (
                    <button type='button' className='text-slate-400' onClick={handleLoadMoreSongs}> Ver más...</button>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    // Mapea el estado de Redux que necesites aquí
});

export default connect(mapStateToProps, { playSong, setPlaylist })(ArtistSongs);
