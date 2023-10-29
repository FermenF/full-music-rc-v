import React from "react";
import { Album } from "../../../Interfaces/album.interface";
import AlbumCard from "../../Artist/Componentes/AlmbumCard";

interface AlbumsPros {
    albums: Album[]
}

const Albums: React.FC<AlbumsPros> = ({ albums }) => {
    
    return (
        <div className=" col-span-7 mt-5 text-white">
            <h1 className="text-2xl text-left lg:text-left lg:text-3xl font-bold mb-5">Albums Track</h1>
            <div className="flex w-full overflow-x-auto pb-3">
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

export default Albums