import React from 'react';
import Lagotipe from './Lagotipe';
import NavSearch from './NavAndSearch';


const Header = () => {
    return (
        <header className='mt-2 mb-2 container mx-auto' >
            <Lagotipe/>
            <hr className='mt-4 mb-4' />
            <NavSearch/>
        </header>
    );
};

export default Header;