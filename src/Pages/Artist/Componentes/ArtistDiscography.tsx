import React, { useEffect, useState } from "react"
import { useInView } from 'react-intersection-observer';
import AlbumCard from "./AlmbumCard";
import { AlbumResponse } from "../../../Interfaces/album.interface";
import { getDataAlbumsByArtist } from "../../../Services/album.service";

interface ArtistDiscographyProps {
    artist: number;
}

const ArtistDiscography: React.FC<ArtistDiscographyProps> = ({ artist }) => {

    const [albums, setAlbums] = useState<AlbumResponse | null>(null);
    const [ref, inView] = useInView();

    const fetchData = async () => {
        if (inView) {
            try {
                const data = await getDataAlbumsByArtist(artist);
                setAlbums(data);
            } catch (error) {
                throw error;
            };
        };
    };

    useEffect(() => {
        fetchData();
    }, [inView]);

    return (
        <div className="w-full text-white bg-slate-950 mt-1 rounded p-5" ref={ref}>
            <h1 className="font-extrabold text-2xl mb-3">Discography</h1>
            <div className="">
                <div className="flex w-full overflow-x-auto mb-">
                    {
                        albums?.data ? (
                            albums.data.map((album, index) => (
                                <div className="mx-1 bg-gray-900 rounded-md p-5 mb-1" key={index}>
                                    <AlbumCard album={album} />
                                </div>
                            ))
                        ) : (
                            <div>Loading...</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ArtistDiscography;
