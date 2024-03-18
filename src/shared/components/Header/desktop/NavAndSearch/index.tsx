import React from 'react';
import SearchRight from './Search/SearchRight';
import NavLeft from './Nav/NavLeft';

const NavSearch = () => {
    return (
        <div className='flex justify-between items-center' >
            <NavLeft/>
            <SearchRight/>
        </div>
    );
};

export default NavSearch;