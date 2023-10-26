
import React from "react";

const Title = () => {
    return (
        <div className="w-full md:h-full md:text-left text-center">
            <h1 className="text-5xl md:text-5xl font-extrabold w-full">Improve Your Music Taste</h1>
            <button className="border-2 mx-auto md:mx-0 border-black bg-white text-black mt-5 py-1 px-4 rounded-full font-semibold flex items-center hover:bg-blue-100 hover:border-blue-900">
                <span className="mr-5">START NOW</span>
                <div className="rounded-full border-black bg-black mx-auto">
                    <svg className="w-4 h-4 m-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z" />
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default Title;
