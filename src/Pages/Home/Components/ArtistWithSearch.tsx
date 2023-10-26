import React from "react";

const ArtistWithSearch = () => {
    return (
        <div className="w-full ">
            <div className="w-100 bg-gray-900 rounded-3xl">
                <div className="md:mx-5 md:mb-2 mx-5 py-2.5 flex justify-between items-center">
                    <div className="flex -space-x-4">
                        <img className="md:w-20 md:h-20 w-16 h-16 rounded-full" src="https://qph.cf2.quoracdn.net/main-qimg-f561ff1bd0468888ee95b7e97143d85b-lq" alt="Image 1" />
                        <img className="md:w-20 md:h-20 w-16 h-16 rounded-full" src="https://qph.cf2.quoracdn.net/main-qimg-f561ff1bd0468888ee95b7e97143d85b-lq" alt="Image 2" />
                        <img className="md:w-20 md:h-20 w-16 h-16 rounded-full" src="https://qph.cf2.quoracdn.net/main-qimg-f561ff1bd0468888ee95b7e97143d85b-lq" alt="Image 3" />
                    </div>
                    <div className="md:flex items-center hidden">
                        <div className="bg-white h-3 w-3 rounded-full"></div>
                        <div className="bg-white h-5 w-5 rounded-full"></div>
                        <div className="bg-white h-7 w-7 rounded-full"></div>
                    </div>
                    <a href="#" className="bg-white md:py-5 md:px-7 py-3 px-5 rounded-full font-bold hover:bg-blue-100 hover:border-blue-900">
                        <div className="underline hover:cursor-pointer">
                            Join
                            <br />
                            Now
                        </div>
                    </a>
                </div>
            </div>
            <div className="w-100 rounded-3xl border border-gray-500 md:mt-3 mt-2">
                <div className="md:m-1 px-4 py-2.5 flex items-center">
                    <div className="rounded-full border mr-1 border-gray-900 p-3">
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                        </svg>
                    </div>
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-100 text-gray-500 w-full rounded-lg block p-3" placeholder="Start with the artist" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistWithSearch;
