import React, { useState } from "react";
import { Album } from "../../../Interfaces/album.interface";
import { getRandomGradient } from "../../../Utils/gradientColors";
import { Link } from 'react-router-dom';

interface AlbumImageProps{
    album: Album
}

const AlbumImage: React.FC<AlbumImageProps> = ({ album }) => {

    const [ gradient ] = useState(getRandomGradient());

    const titleSize = (title: string): string => {
        if (title.length > 15) {
            return "lg:text-6xl text-2xl";
        }
        return "lg:text-8xl text-4xl";
    }

    return (
        <div className={`lg:flex flex-grow flex-row p-5 bg-gradient-to-bl ${ gradient }`}>
            <img src={ album.cover_medium } alt="" className="shadow-2xl shadow-black" />
            <div className="lg:relative w-full">
                <div className="lg:absolute w-full bottom-0 lg:pl-10 text-white">
                    <h1 className={ `${ titleSize(album.title) } font-extrabold mt-5` }>
                        { album.title }
                    </h1>
                    <div className="mt-5 lg:flex flex-grow flex-row items-center">
                        <div className="flex items-center">
                            <img src={ album.artist.picture_small } alt="" className="h-10 w-10 rounded-full" />
                            <Link to={`/dashboard/artists/${ album.artist.id }/${ album.artist.name.replace('/', '|') }`}>
                                <strong className="mx-2">{ album.artist.name }</strong>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <svg className="md:w-5 md:h-5 w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                            <span className="ml-2 mr-1">{ album.release_date } |</span>
                            <span>{ album.nb_tracks } Canciones, { (album.duration / 3600).toFixed(2) } h</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumImage;