import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Album, AlbumResponse } from '../../Interfaces/album.interface';
import AlbumImage from "./Components/AlbumImage";
import AlbumSongs from "./Components/AlbumSongs";
import MoreAlbums from "./Components/MoreAlbums";
import { getDataAlbumsByArtist } from "../../Services/album.service";

const AlbumShow = () => {
    const [moreAlbumsData, setMoreAlbumsData] = useState<AlbumResponse | null>(null);

    const album = useLoaderData() as Album;
    const songs = album.tracks.data;

    const fetchMoreAlbums = async (): Promise<void> => {
        try {
            const response = await getDataAlbumsByArtist(album.artist.id);
            setMoreAlbumsData(response);
        } catch (error) {
            console.error("Error al obtener más álbumes:", error);
        }
    };

    useEffect(() => {
        fetchMoreAlbums();
    }, [album]);

    return (
        <div className="grid grid-cols-1 grid-rows-1 w-full h-full overflow-hidden">
            <div className="col-span-1 row-span-1 rounded-md">
                <div className={`overflow-y-auto max-h-[91.2vh]`}>
                    <AlbumImage album={album} />
                    <AlbumSongs songs={songs} artist={album.artist.name} />
                    {moreAlbumsData && (
                        <MoreAlbums moreAlbums={moreAlbumsData} artist={album.artist.name} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlbumShow;
