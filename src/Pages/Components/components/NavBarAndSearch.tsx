import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import { RootSearchState, activateSearch, deactivateSearch } from '../../../Reducers/searchReducer';

const NavBarAndSearch = () => {

    const navigate = useNavigate ();
    const [showDropDrownBars, setshowDropDrownBars] = useState('hidden');
    const search = useSelector((state: RootSearchState) => state.searchReducer);
    const dispatch = useDispatch();

    const goBack = () => {
        navigate(-1);
    };
    const goForward = () => {
        navigate(1);
    };

    const toggleDropdownBars = () => {
        setshowDropDrownBars(prevState => (prevState === 'hidden' ? 'block' : 'hidden'));
    }

    const handleSearch = () => {
        if (search) {
            dispatch(deactivateSearch());
        } else {
            dispatch(activateSearch());
        }
    }

    return (
        <div className="text-black md:text-white w-full bg-white md:bg-slate-950 mb-2 py-4 px-3 rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src='/images/logo-wh.png' className='h-10 md:block hidden' />
                    <img src='/images/logo.png' className='h-10 md:hidden'/>
                </div>
                <div className="md:hidden flex">
                    <div className='flex'>
                        <button type='button' className='bg-gray-200 py-2 px-1.5 rounded-full flex items-center mx-1' onClick={ goBack }>
                            <svg className="w-6 h-5 pr-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                            </svg>
                        </button>
                        <button type='button' className='bg-gray-200 py-2 px-1.5 rounded-full flex items-center' onClick={ goForward }>
                            <svg className="w-6 h-5 pr-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                            </svg>
                        </button>
                    </div>
                    <button type='button' className='ml-3' onClick={() => toggleDropdownBars()}>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`mt-4 ${showDropDrownBars} md:block`}>
                <Link to="/dashboard" className="flex content-center items-center cursor-pointer">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                    </svg>
                    <strong className="ml-5 text-sm">Home</strong>
                </Link>
            </div>
            <div className={`mt-4 ${showDropDrownBars} md:block`} onClick={handleSearch}>
                <a className="flex content-center items-center cursor-pointer">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <strong className="ml-5 text-sm">Search</strong>
                </a>
            </div>
        </div>
    );
}

export default NavBarAndSearch;


