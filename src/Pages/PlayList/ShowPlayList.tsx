import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PlayListResponse } from "../../Interfaces/playList.interface";
import TrackList from "./Components/TracksList";
import { getRandomGradient } from "../../Utils/gradientColors";

const ShowPlayList = () => {

    const [ gradient ] = useState(getRandomGradient());
    const data = useLoaderData() as PlayListResponse;
    const playList = data;

    return(
        <div className="w-full h-full md:overflow-y-scroll md:max-h-[91.1vh]">
            <div className={`lg:flex p-5 w-full bg-gradient-to-bl ${ gradient }`}>
                <img src={ playList.picture_xl } alt="" className="object-cover h-62 w-full lg:h-64 lg:w-64"/>
                <div className="text-white lg:relative w-full">
                    <div className="lg:ml-5 bottom-0 lg:absolute w-full">
                        <h1 className="lg:text-5xl text-3xl font-extrabold lg:text-left text-center">{ playList.title }</h1>
                        <p className="lg:text-2xl text-center lg:text-left">
                            { playList.description }
                        </p>
                        <div className="flex justify-between lg:flex-col lg:justify-normal">
                            <span>Duration: { (playList.duration / 3600).toFixed(2) } h</span>
                            <div>{ playList.nb_tracks } Tracks</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-950">
                <TrackList tracks={ playList.tracks }/>
            </div>
        </div>
    );
}

export default ShowPlayList;