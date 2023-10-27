import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { SearchResponse } from "../../Interfaces/search.interface";
import MoreResults from "./Components/MoreResults";
import RelevantResult from "./Components/RelevantResult";

const Search = () => {
    const results = useLoaderData() as SearchResponse;
    const { query } = useParams<{ query: string }>();

    const relevantSong = results.data[0];
    const songs = results;

    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-7 grid-rows-1 p-5 gap-2 items-center">
                {
                    relevantSong && 
                        <RelevantResult relevantSong={relevantSong} />
                }
                {
                    songs.total > 0 && 
                        <MoreResults data={songs} />
                }
            </div>
                {
                    !results.data.length || !query || !relevantSong && (
                        <h1>Sin resultados para la búsqueda { query }</h1>
                    )
                }
        </div>
    );
};

export default Search;
