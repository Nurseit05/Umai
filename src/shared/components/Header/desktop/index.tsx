import React from 'react';
import Lagotipe from './Lagotipe';
import NavSearch from './NavAndSearch';

import s from './header.module.scss'

const HeaderDesktop = () => {
    return (
        <header className={s.container} >
            <div className={s.wrapper}>
                <Lagotipe/>
                <hr className={s.marginSize} />
                <NavSearch/>
            </div>
        </header>
    );
};

export default HeaderDesktop;