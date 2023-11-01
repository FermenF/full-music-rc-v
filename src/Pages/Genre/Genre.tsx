import React from "react";
import { useLoaderData } from "react-router-dom";
import { GenreResponse } from "../../Interfaces/genre.inteface";
import GenreCard from "./Components/GenreCard";

const Genre = () => {

    const { data } = useLoaderData() as GenreResponse;

    return (
        <div className="w-full h-full bg-slate-950 mt-1 rounded-md">
            <div className="p-5 py-2">
                <strong className="text-2xl font-bolf text-white">Categories</strong>
            </div>
            <div className="px-5 md:overflow-y-auto md:max-h-[85vh]">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 lg:gap-3 mt-5 md:mt-0 justify-center">
                    {
                        data.map((genre, i) => (
                            <GenreCard genre={genre} key={ i } />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


export default Genre;

