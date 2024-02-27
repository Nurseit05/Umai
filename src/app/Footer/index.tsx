'use client'

import React from 'react';
import SearchButton from './SearchButton';
import InfoList from './InfoList';

import s from './footer.module.scss'
import Contacts from './Contacts';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';


const Footer = () => {

    const pathname = usePathname()

    return (
        <footer className={clsx(s.container, pathname === '/' ? s.bgGray : s.bgWhite)} >
            <div className={s.containerBorder}>
                <SearchButton/>
                <InfoList/>
                <Contacts/>
            </div>
        </footer>
    );
};

export default Footer;