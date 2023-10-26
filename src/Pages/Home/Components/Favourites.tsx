import React from "react";

const Favourites = () => {
    const backgroundImageUrl = "/images/bg-favourites-home-bocanada-gc.jpg";

    const bgImage = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%'
    };

    return (
        <div className="w-full h-full rounded-3xl flex flex-col justify-between" style={bgImage}>
            <div className="flex w-full lg:p-14 md:p-3 p-6 justify-between md:justify-start">
                <div className="flex-grow">
                    <div className="text-left flex">
                        <button className="text-white font-bold bg-transparent border-2 border-white rounded-3xl p-2 hover:bg-slate-400" style={{ letterSpacing: '1px' }}>Favourites</button>
                        <button className="flex items-center text-white bg-transparent border-2 border-white rounded-3xl lg:p-2 md:p-1 p-2 hover:bg-slate-400">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="text-right">
                    <button className="text-black bg-white p-3 md:p-6 rounded-full hover:bg-slate-800">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="text-white lg:p-14 md:p-6 p-5">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Always your <br />favourites
                </h1>
                <p className="text-lg md:text-xl mt-2">
                    Listening to music that you <br /> love - upload to cloud
                </p>
            </div>
        </div>
    );
};

export default Favourites;
