import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../../../actions/songActions.js';
import { getSongFromYoutube, truncateTitle, covertDuration } from '../../../Utils/utils.js';
import { SongResponse } from '../../../Interfaces/song.interface.js';
import { PlaySong } from '../../../Interfaces/playSong.interface.js';

interface ArstistSongsProps {
    tops: SongResponse;
    artist: string;
    playSong: (song: PlaySong) => void;
}

const ArtistSongs: React.FC<ArstistSongsProps> = ({ tops, artist, playSong }) => {

    window.localStorage.setItem('songs', JSON.stringify(tops.data));

    async function playSongArtist(e, title: string, artist: string, duration: any, image: string, id: number) {
        try {
            e.preventDefault();
            const data = await getSongFromYoutube(title, artist, duration, image, id);
            playSong(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full mb-5">
            <div className="text-white">
                <h1 className="font-extrabold text-2xl">Popular</h1>
                <div className="mt-3">
                    {tops ? (
                        tops.data.map((top, index) => (
                            <div key={index + 1} onClick={(event) => playSongArtist(
                                event,
                                top.title,
                                artist,
                                covertDuration(top.duration),
                                top.album.cover_small,
                                top.id
                            )}
                                className={`hover:bg-gray-500 p-3 flex items-center justify-between cursor-pointer rounded-md my-3`}>
                                <div className="md:p-3 flex items-center">
                                    <div className="md:ml-3 mr-1 md:mr-5 text-gray-300">{index + 1}</div>
                                    <img className="img-fluid rounded-md" src={top.album.cover_small} alt="Album Cover" />
                                    <div className="ml-3 font-bold md:hidden">{truncateTitle(top.title, 29)}</div>
                                    <div className="ml-3 font-bold hidden sm:block">{top.title}</div>
                                </div>
                                <div className="md:p-3 md:mx-3 text-gray-300">{covertDuration(top.duration)}</div>
                            </div>
                        ))
                    ) : (
                        <p>Cargando canciones...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    // Mapea el estado de Redux que necesites aquí
});

export default connect(mapStateToProps, { playSong })(ArtistSongs);