import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBarAndSearch = () => {

    const [showDropDrown, setShowDropDown] = useState('hidden');
    const [showDropDrownBars, setshowDropDrownBars] = useState('hidden');

    const toggleDropdown = () => {
        setShowDropDown(prevState => (prevState === 'hidden' ? 'block' : 'hidden'));
    };

    const toggleDropdownBars = () => {
        setshowDropDrownBars(prevState => (prevState === 'hidden' ? 'block' : 'hidden'));
    }

    return (
        <div className="text-white w-full bg-gray-950 mb-2 py-6 px-4 rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    LOGO
                    <h1 className="ml-1 font-bold text-sm hidden md:block">FULL MUSIC</h1>
                </div>
                <div className="md:hidden flex">
                    <div>
                        <button id="dropdownDefault" type="button" onClick={() => toggleDropdown()} className="inline-flex items-center p-1 px-2 text-sm font-normal text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100">
                            <svg className="w-2.0 h-2 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdown" className={`z-10 divide-y ${showDropDrown} divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}
                            style={{ 'position': 'absolute', 'inset': '0px auto auto 0px', 'margin': '0px', 'transform': 'translate3d(130px, 66px, 0px)' }}>
                            <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-white">New branch</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-white">Rename</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button type='button' className='ml-3' onClick={() => toggleDropdownBars()}>
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`mt-4 ${showDropDrownBars} md:block`}>
                <Link to="/dashboard" className="flex content-center items-center cursor-pointer">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                    </svg>
                    <strong className="ml-5 text-sm">Home</strong>
                </Link>
            </div>
            <div className={`mt-4 ${showDropDrownBars} md:block`}>
                <a className="flex content-center items-center cursor-pointer">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <strong className="ml-5 text-sm">Search</strong>
                </a>
            </div>
        </div>
    );
}

export default NavBarAndSearch;


