import { Link } from "react-router-dom";
import React from "react";
import { Genre } from "../../../Interfaces/genre.inteface";

interface GenreCardProps {
    genre: Genre;
};

const GenreCard: React.FC<GenreCardProps> = ({ genre }) => {

    const { id, name, picture_medium } = genre;
    
    return (
        <Link to={`/dashboard/genre/${id}/${name.replace('/', '_&_')}/artists`}>
            <figure className="relative mx-auto max-w-sm transition-all duration-300 cursor-pointer filter hover:grayscale">
                <img className="rounded-lg" src={picture_medium} alt="image description" />
                <figcaption className="absolute px-4 text-lg text-white bottom-6 bg-black w-full">
                    <strong className="break-words">{name.replace('/', ' / ')}</strong>
                </figcaption>
            </figure>
        </Link>
    );
}

export default GenreCard;
