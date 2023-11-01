import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlayListResponse } from "../../../Interfaces/playList.interface";
import PlayListCard from "./PlayListCard";
import { ArtistResponse } from "../../../Interfaces/artist.interface";
import { getArtistsRelated } from "../../../Services/related.service";

interface ArtistsRelatedProps {
    artist: number;
}

const ArtistsRelated: React.FC<ArtistsRelatedProps> = ({ artist }) => {

    const [artists, setArtists] = useState<ArtistResponse | null>(null);

    const fetchData = async () => {
        try {
            const data = await getArtistsRelated(artist);
            setArtists(data);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 1000);
    }, [artist]);

    return (
        <div className="">
            <div className="flex items-center justify-between text-white">
                <h1 className="text-2xl font-bold">You might be interested</h1>
                <button className="bg-green-500 md:block hidden font-bold p-2 rounded hover:bg-green-700">View More</button>
            </div>
            <div className="flex flex-col justify-between h-full md:mt-1 lg:mt-1 md:mb-0 mb-2">
                <div className="md:flex lg:flex-col">
                    {
                        artists?.data ? (
                            artists.data.map((artist) => (
                                <Link to={`/dashboard/artists/${ artist.id }/${ artist.name.replace('/', '|')}`} key={ artist.id } className="mx-0 md:mx-2"> 
                                    <div className="relative w-full mt-2.5">
                                        <img className="object-cover object-top w-full rounded-md h-60" src={artist.picture_big} alt="" />
                                        <h5 className="absolute pl-5 w-full bottom-4 text-2xl font-bold tracking-tight text-white bg-black">
                                            { artist.name }
                                        </h5>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="h-[30rem] flex items-center justify-center bg-gray-800 rounded-md">
                                <div role="status">
                                    <svg aria-hidden="true" className="inline w-12 h-12 mr-2 text-gray-200 animate-spin fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="h-60 mt-0.5">
                    <h1 className="text-white text-1xl font-bold">Recomended PlayLists</h1>
                    <PlayListCard artist={ artist }/>
                </div>
            </div>
        </div>
    )
}

export default ArtistsRelated;