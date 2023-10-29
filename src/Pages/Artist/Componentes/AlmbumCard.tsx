import React from "react"
import { truncateTitle } from "../../../Utils/utils";
import { Album } from "../../../Interfaces/album.interface";
import { Link } from "react-router-dom";

interface AlbumCardProps {
    album:Album
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {

    const capitalizeFirstLetter = (str:string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return(
        <div className="w-[150px]">
            <Link to={`/dashboard/album/${ album.id }`}>
                <img src={ album.cover_medium } className="rounded-2xl" loading="lazy"/>
                <div className="text-white mt-3 pb-4">
                    <h1 className="font-bold">
                        { truncateTitle(album.title, 15) }
                    </h1>
                    {
                        album.record_type && (
                            <span>{ album.release_date } | { capitalizeFirstLetter(album.record_type) }</span>
                            )
                        }
                </div>
            </Link>
        </div>
    );
}

export default AlbumCard;
