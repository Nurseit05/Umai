import React from 'react';
import Lagotipe from './Lagotipe';
import NavSearch from './NavAndSearch';

import s from './header.module.scss'

const Header = () => {
    return (
        <header className={s.container} >
            <div className={s.wrapper}>
                <Lagotipe/>
                <hr className='mt-4 mb-4' />
                <NavSearch/>
            </div>
        </header>
    );
};

export default Header;