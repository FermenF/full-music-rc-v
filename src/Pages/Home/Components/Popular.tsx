import React from "react";

const Popular = () => {
    const singerImage = "/images/singer-6036217_1280.jpg";

    return (
        <div className="w-full h-full bg-black rounded-3xl">
            <div className="flex w-full md:p-14 p-5 justify-between md:justify-start">
                <div className="flex-grow">
                    <div className="text-left flex">
                        <button className="text-white font-bold bg-transparent border-2 border-white rounded-3xl p-2 hover:bg-slate-400" style={{ letterSpacing: '1px' }}>Popular</button>
                        <button className="flex items-center text-white bg-transparent border-2 border-white rounded-3xl p-2 hover:bg-slate-400">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="text-right">
                    <button className="text-white border-white border bg-black p-3 md:p-6 rounded-full hover:bg-slate-800">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="md:p-14 p-5 w-full h-64 text-white flex items-center justify-center relative">
                <img src={singerImage} className="rounded-full h-52 object-cover" alt="Singer" />
            </div>
            <div className="flex w-full md:14 p-5 justify-center">
                <button className="text-white font-bold bg-transparent border-2 border-white rounded-3xl p-2 hover:bg-slate-400" style={{ letterSpacing: '1px' }}>Explore</button>
                <button className="text-white font-bold bg-transparent border-2 border-white rounded-3xl p-2 flex items-center hover:bg-slate-400" style={{ letterSpacing: '1px' }}>
                    <div>Ruido Audio</div>
                    <div className="bg-white ml-5 rounded-full p-2 flex items-center justify-center">
                        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                        </svg>
                    </div>
                </button>
            </div>
            <div className="text-white md:p-14 p-5">
                <h1 className="text-3xl md:text-4xl font-bold">
                    These artists on <br />top right now
                </h1>
                <p className="text-lg md:text-xl mt-2">
                    Listen to most pupular <br /> bright and trendy musicians
                </p>
            </div>
        </div>
    );
};

export default Popular;
