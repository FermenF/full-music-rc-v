import React from "react"
import { truncateTitle } from "../../../Utils/utils";
import { Album } from "../../../Interfaces/album.interface";

interface AlbumCardProps {
    album:Album
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {

    const capitalizeFirstLetter = (str:string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const record_type = capitalizeFirstLetter(album.record_type);

    return(
        <div className="w-[150px]">
            <img src={ album.cover_medium } className="rounded-2xl" loading="lazy"/>
            <div className="text-white mt-3 pb-4">
                <h1 className="font-bold">
                    { truncateTitle(album.title, 15) }
                </h1>
                <span>{ album.release_date } | { record_type }</span>
            </div>
        </div>
    );
}

export default AlbumCard;
