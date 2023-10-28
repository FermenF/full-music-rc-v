import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { SearchResponse } from "../../Interfaces/search.interface";
import MoreResults from "./Components/MoreResults";
import RelevantResult from "./Components/RelevantResult";

const Search = () => {
    const results = useLoaderData() as SearchResponse;
    let { query } = useParams<{ query: string }>();

    const relevantSong = results.data[0];
    const songs = results;

    function ShowMessageNotFound(){
        if(songs.total === 0){
            if(!query){
                query = "";
            }
            return (
                <div className="text-blue-500 text-2xl font-bold">
                    <span className="text-gray-300">Sin resultados para la búsqueda:</span> { `${ query }` }
                </div>
            );
        }
    };

    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-7 grid-rows-1 p-5 gap-2 items-center">
                {
                    relevantSong && 
                        <RelevantResult relevantSong={relevantSong} songs={ songs }/>
                }
                {
                    songs.total > 1 && 
                        <MoreResults data={songs} />
                }
            </div>
            <ShowMessageNotFound />
        </div>
    );
};

export default Search;

