import React from "react"
import AlbumCard from "./AlmbumCard";
import { AlbumResponse } from "../../../Interfaces/album.interface";

interface ArtistDiscographyProps {
    albums: AlbumResponse;
}

const ArtistDiscography: React.FC<ArtistDiscographyProps> = ({ albums }) => {

    return (
        <div className="w-full mt-5 text-white">
            <hr />
            <h1 className="font-extrabold text-2xl my-5">Discography</h1>
            <div className="flex w-full overflow-x-auto pb-3">
                {
                    albums.data.map((album, index) => (
                        <div className="mx-1 bg-gray-900 rounded-md p-5" key={index}>
                            <AlbumCard album={ album } />
                        </div>
                    ))
                }
            </div>
        </div>

    );
}

export default ArtistDiscography;
