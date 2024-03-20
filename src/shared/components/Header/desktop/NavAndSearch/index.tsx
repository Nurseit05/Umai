import React from 'react';
import SearchRight from './Search/SearchRight';
import NavLeft from './Nav/NavLeft';

import s from './navAndSearch.module.scss'

const NavSearch = () => {
    return (
        <div className={s.container} >
            <NavLeft/>
            <SearchRight/>
        </div>
    );
};

export default NavSearch;