import React from 'react';
import SearchRight from './Search/SearchRight';
import NavLeft from './Nav/NavLeft';

const NavSearch = () => {
    return (
        <nav className='flex justify-between items-center' >
            <NavLeft/>
            <SearchRight/>
        </nav>
    );
};

export default NavSearch;