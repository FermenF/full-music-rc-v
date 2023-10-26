import React, { useState } from "react";
import { truncateTitle } from "../../../Utils/utils";
import AudioController from "./AudioController";
import { Info, PlaySong } from "../../../Interfaces/playSong.interface";

interface PlayBannerProps {
    song: PlaySong
}

const PlayBanner: React.FC<PlayBannerProps> = ( { song } ) => {

    const { drezzerId, name, title, image } = song.info;
    const url = song.url;

    const [showBanner, setShowBanner] = useState(true);

    const handleShowBanner = () => {
        setShowBanner(!showBanner);
    }

    return (

        <div id="bottom-banner" tabIndex={-1} className={`fixed text-black  z-50 flex justify-between items-center p-2 md:px-5 rounded-md
        ${showBanner === !true ? 'w-3 py-4 right-0 bottom-2' : 'bottom-0 w-full bg-white left-0'}`}>
            <div className="absolute right-2.5 top-1">
                <button type="button" className="rounded-full p-1 bg-blue-700" onClick={handleShowBanner}>
                    {
                        showBanner === !true ? (
                            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                                <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                                <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                            </svg>
                        )
                    }
                </button>
            </div>
            <div className={`grid grid-cols-5 grid-rows-2 lg:grid-rows-1 gap-0 items-center w-full ${showBanner === !true ? 'hidden' : ''}`}>
                <div className="flex items-center col-start-1 col-span-5 lg:col-span-1 mt-5">
                    <img src={ image } className="img-fluid h-16 w-16 rounded-md" />
                    <div className="md:ml-3 ml-1">
                        <div className="font-bold text-sm">
                            <h1>{truncateTitle(title, 40)}</h1>
                        </div>
                        <div className="text-gray-900 font-extralight text-xs">
                            <h5>{ name }</h5>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 lg:col-span-3">
                    <AudioController url={ url }/>
                </div>
            </div>
        </div>
    );
};

export default PlayBanner;
