import React, { useState } from "react";

const Library = () => {

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="w-full h-full bg-gray-950 rounded-md overflow-hidden">
            <div className="flex justify-between items-center py-6 px-7 justify-items-center">
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 19A3.5 3.5 0 0 1 1 15.5V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5A3.5 3.5 0 0 1 4.5 19Zm0 0H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4.938a1 1 0 0 0-.697.283l-4.238 4.124a1.046 1.046 0 0 0-.164.208C6.986 18.228 6.184 18.705 4.5 19Zm0-4h.01m8.925-12.293 3.536 3.536a1 1 0 0 1 0 1.414L8 16.627v-9.9l4.02-4.02a1 1 0 0 1 1.415 0Z" />
                    </svg>
                    <strong className="text-white ml-3.5">Your Library</strong>
                </div>
                <div className="flex items-center">
                    <button className="ml-1 font-bold text-sm p-2 hover:bg-neutral-700 rounded-full">
                        <svg className="h-3.5 w-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                    <button type="button" className="ml-1 font-bold text-sm p-2 hover:bg-neutral-700 rounded-full md:hidden block" onClick={handleOpen}>
                        <svg className="h-3.5 w-3.5 text-white pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`bg-red-100 mx-2.5 rounded-md py-6 px-7 mb-5 ${open === true ? "hidden" : ""} md:block`}>
                <strong>Create your fisrt filelist</strong>
                <p className="mt-1 text-sm font-extralight">¡Is so easy! We help to you</p>
                <div className="mt-5">
                    <a className="p-2 px-4 bg-white rounded-3xl">
                        <strong className="text-sm">Create filelist</strong>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Library;
