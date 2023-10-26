import React from "react";

const Discovers = () => {
    return (
        <div className="bg-blue-500 w-full h-full rounded-3xl flex flex-col justify-between">
            <div className="flex w-full md:p-14 md:pb-0 p-5 pb-0 justify-between md:justify-start">
                <div className="flex-grow">
                    <div className="text-left flex">
                        <button className="text-white font-bold bg-transparent border-2 border-white rounded-3xl p-2 hover:bg-slate-400" style={{ letterSpacing: '1px' }}>Discovers</button>
                        <button className="flex items-center text-white bg-transparent border-2 border-white rounded-3xl p-2 hover:bg-slate-400">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 0H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM5 14H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM12 2H8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2Zm0 14H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-8-4V8a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0Zm14 0V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="text-right">
                    <button className="text-white bg-black p-3 md:p-6 rounded-full hover:bg-slate-800">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="text-white md:p-14 p-5">
                <div className="mb-2">
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z" />
                    </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    New names & <br />recognition
                </h1>
                <p className="text-lg md:text-xl mt-2">
                    Our database never stop growing<br />
                    its means endless discovering.
                </p>
            </div>
        </div>
    );
};

export default Discovers;
