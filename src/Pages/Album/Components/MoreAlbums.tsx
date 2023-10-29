import React from "react";
import {AlbumResponse } from '../../../Interfaces/album.interface';
import AlbumCard from "../../Artist/Componentes/AlmbumCard";

interface MoreAlbumsProps{
    moreAlbums: AlbumResponse;
    artist: string;
}

const MoreAlbums: React.FC<MoreAlbumsProps> = ({ moreAlbums, artist }) => {
    const albums = moreAlbums.data;
    return(
        <div className="bg-slate-950 px-5 pb-5">
            <h1 className="text-2xl text-white font-bold md:flex text-center md:text-left">
                <div>{ moreAlbums.total } More from</div>
                <span className="text-blue-500 md:l-2">{ artist }</span>
            </h1>
            <div className="flex w-full overflow-x-auto pb-3 mt-5">
                {
                    albums.map((album, index) => (
                        <div className="mx-1 bg-gray-900 rounded-md p-5" key={index}>
                            <AlbumCard album={ album } />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default MoreAlbums;