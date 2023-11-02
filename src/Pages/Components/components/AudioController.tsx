import React, { useEffect, useState, useRef } from "react";
import { connect, useSelector } from "react-redux";
import { prevSong, nextSong, setLoadingState} from '../../../actions/songActions';
import { RootSongState } from "../../../Reducers/songReducer";
import { Song } from "../../../Interfaces/song.interface";
import { getNextSong } from "../../../Utils/utils";

interface AudioControllerProps {
    id: number;
    url: string;
    prevSong: (id:number, song:Song[] | null) => void;
    nextSong: (id:number, song:Song[] | null) => void;
    setLoadingState: (id:number, isLoading:boolean) => void;
}

const AudioController: React.FC<AudioControllerProps> = ({ id, url, prevSong, nextSong, setLoadingState}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const currentSong = useSelector((state: RootSongState) => state.musicReducer.currentSong);
    const playList = useSelector((state: RootSongState) => state.musicReducer.playlist);
    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = useRef(new Audio(url));

    useEffect(() => {
        if (currentSong) {
            audioRef.current.src = currentSong.url;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentSong]);

    useEffect(() => {
        
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    const handleTimeUpdate = () => {
        console.log("contador");

        setCurrentTime(audioRef.current.currentTime);
        if(audioRef.current.currentTime === audioRef.current.duration){
            const nextSong = document.getElementById("button-next-song");
            nextSong?.click();
        }
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNextSong = async () => {
        const data = getNextSong(playList, currentSong?.info.drezzerId, 'NEXT');
        if(data){
            setLoadingState(data.id, true);
        }
        audioRef.current.pause();
        const nextSongResult = await nextSong(id, playList);
        if(nextSongResult === undefined && data){
            setLoadingState(data.id, false);
        }
    };

    const handlePrevSong = async () => {
        const data = getNextSong(playList, currentSong?.info.drezzerId, 'PREV');
        if(data){
            setLoadingState(data.id, true);
        }
        audioRef.current.pause();
        const prevSongResult = await prevSong(id, playList);
        if(prevSongResult === undefined && data){
            setLoadingState(data.id, false);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="w-full text-center">
            <div className="flex items-center justify-center my-2">
                <button className="mx-1 rounded-full p-2 bg-black hover:bg-slate-500">
                    <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
                    </svg>
                </button>
                <button className="mx-1 rounded-full p-2 bg-black hover:bg-slate-500" onClick={ handlePrevSong }>
                    <svg className="w-4 h-4 text-white pr-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                </button>
                <button type="button"
                    className="mx-1 rounded-full p-2 text-white bg-black hover:bg-slate-500"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? (
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                            <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 pl-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                        </svg>
                    )}
                </button>
                <button type="button" id="button-next-song" className="mx-1 rounded-full p-2 bg-black hover-bg-slate-500" onClick={handleNextSong}>
                    <svg className="w-4 h-4 text-white pl-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                </button>
                <button className="mx-1 rounded-full p-2 bg-black hover:bg-slate-500">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 9a1 1 0 0 0-1 1 6.994 6.994 0 0 1-11.89 5H7a1 1 0 0 0 0-2H2.236a1 1 0 0 0-.585.07c-.019.007-.037.011-.055.018-.018.007-.028.006-.04.014-.028.015-.044.042-.069.06A.984.984 0 0 0 1 14v5a1 1 0 1 0 2 0v-2.32A8.977 8.977 0 0 0 18 10a1 1 0 0 0-1-1ZM2 10a6.994 6.994 0 0 1 11.89-5H11a1 1 0 0 0 0 2h4.768a.992.992 0 0 0 .581-.07c.019-.007.037-.011.055-.018.018-.007.027-.006.04-.014.028-.015.044-.042.07-.06A.985.985 0 0 0 17 6V1a1 1 0 1 0-2 0v2.32A8.977 8.977 0 0 0 0 10a1 1 0 1 0 2 0Z" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center">
                <small className="mx-1 text-gray-600 font-extralight text-sm">
                    {formatTime(audioRef.current.currentTime)}
                </small>
                <input
                    type="range"
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-900"
                    min={ 0 }
                    max={ isNaN(audioRef.current.duration) ? 100 : audioRef.current.duration }
                    step={0.1}
                    value={ currentTime }
                    onChange={ (e) => (audioRef.current.currentTime = parseFloat(e.target.value)) }
                />
                <small className="mx-1 text-gray-600 font-extralight text-sm">
                    {
                        audioRef.current.duration ?
                        formatTime(audioRef.current.duration) : (
                            <small>
                                {`>`}
                            </small>
                        )
                    }
                </small>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
});

// @ts-ignore
export default connect(mapStateToProps, { prevSong, nextSong, setLoadingState })(AudioController);
