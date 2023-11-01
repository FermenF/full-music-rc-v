import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { SearchResponse } from "../../Interfaces/search.interface";
import MoreResults from "./Components/MoreResults";
import RelevantResult from "./Components/RelevantResult";
import Albums from "./Components/Albums";
import { getAlbumsFromSongs } from "../../Utils/utils";

const Search = () => {
    const results = useLoaderData() as SearchResponse;
    let { query } = useParams<{ query: string }>();

    const relevantSong = results.data[0];
    const songs = results;
    const albums = getAlbumsFromSongs(songs.data);

    function ShowMessageNotFound(){
        if(songs.total === 0){
            if(!query){
                query = "";
            }
            return (
                <div className="col-span-7 row-span-1">
                    <div className="text-blue-500 text-2xl font-bold">
                    <span className="text-gray-300">Sin resultados para la búsqueda:</span> { `${ query }` }
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="w-full h-full bg-slate-950 mt-1 rounded-md">
            <div className="grid grid-cols-7 grid-rows-1 p-5 gap-2 items-center">
                {
                    relevantSong && 
                        <RelevantResult relevantSong={relevantSong} songs={ songs }/>
                }
                {
                    songs.total > 1 && 
                        <MoreResults data={songs} />
                }
                {   
                    songs.total > 1 &&
                    <Albums albums={ albums }/>
                }
                <ShowMessageNotFound />
            </div>
        </div>
    );
};

export default Search;

