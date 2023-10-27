import React from "react";
import { useLoaderData } from "react-router-dom";
import { ShowData } from "../../Interfaces/showData.interface";
import { SongResponse } from '../../Interfaces/song.interface';

import ArtistSongs from "./Componentes/ArtistSongs";
import ArtistImage from "./Componentes/ArtistImage";
import ArtistDiscography from "./Componentes/ArtistDiscography";
import { AlbumResponse } from "../../Interfaces/album.interface";

const Show = () => {
    const data = useLoaderData() as ShowData;
    const songs:SongResponse = data.songs;
    const albums:AlbumResponse = data.albums;

    return (
        <div className="grid grid-cols-1 mt-1 md:grid-cols-7 grid-rows-1 md:gap-3 w-full h-full">
            <div className="col-span-1 md:col-span-5 row-span-1 rounded-md">
                <div className="md:h-full md:w-full overflow-y-auto max-h-[90.9vh]">
                    <ArtistImage 
                        country={ data.country } area={ data.area }
                        image= { data.artist.picture_xl } name={ data.artist.name }
                    />
                    <div className="bg-gray-950 p-5">
                        <ArtistSongs tops={ songs } artist={ data.artist.name } />
                        <ArtistDiscography albums={albums} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 row-span-1 bg-red-500">
            </div>
        </div>
    );
};

export default Show;
