import React from "react";
import { useLoaderData } from "react-router-dom";
import { ShowData } from "../../Interfaces/showData.interface";
import { SongResponse } from '../../Interfaces/song.interface';

import ArtistSongs from "./Componentes/ArtistSongs";
import ArtistImage from "./Componentes/ArtistImage";
import ArtistDiscography from "./Componentes/ArtistDiscography";
import ArtistsRelated from "./Componentes/ArtistsRelated";
import PlayListCard from "./Componentes/PlayListCard";

const Show = () => {
    const data = useLoaderData() as ShowData;
    const songs:SongResponse = data.songs;

    return (
        <div className="grid grid-cols-1 mt-1 md:grid-cols-7 grid-rows-1">
            <div className="col-span-7 lg:col-span-5 row-span-1 rounded-md">
                <div className="md:h-full md:w-full overflow-y-auto max-h-[90.8vh]">
                    <ArtistImage 
                        country={ data.country } area={ data.area }
                        image= { data.artist.picture_xl } name={ data.artist.name }
                    />
                    <ArtistSongs tops={ songs } artist={ data.artist.name } />
                    <hr className="my-1"/>
                    <ArtistDiscography artist={ data.artist.id }/>
                    <div className="lg:hidden bg-slate-950">
                        <hr className="my-1"/>
                        <div className="p-5">
                            <ArtistsRelated artist={ data.artist.id }/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-7 lg:col-span-2 row-span-1 lg:block hidden">
                <div className="bg-slate-950 p-5">
                    <ArtistsRelated artist={ data.artist.id }/>
                </div>
            </div>
        </div>
    );
};

export default Show;
