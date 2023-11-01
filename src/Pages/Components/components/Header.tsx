import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const goForward = () => {
        navigate(1);
    };

    return(
        <div className="flex justify-between text-white py-4 px-10 bg-slate-950 rounded-t-md">
            <div className="flex">
                <button type="button" className="bg-slate-800 p-2 rounded-full" onClick={ goBack }>
                    <svg className="w-6 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                    </svg>
                </button>
                <button type="button" className="bg-slate-800 p-2 rounded-full ml-0.5" onClick={ goForward }>
                    <svg className="w-6 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg>
                </button>
            </div>
            <button type="button" className="flex items-center bg-red-100 p-2 rounded hover:bg-red-200 hover:text-gray-500">
                <img src="https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png" className="w-6 h-5 mr-2 rounded-full"/>
                <strong className="mr-2 text-gray-900">Fernando Fernandez</strong>
                <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
            </button>
        </div>
    );
}

export default Header;
