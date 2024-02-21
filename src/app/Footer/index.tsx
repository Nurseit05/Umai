'use client'

import React from 'react';
import SearchButton from './SearchButton';
import InfoList from './InfoList';

import s from './footer.module.scss'
import clsx from 'clsx';
import Contacts from './Contacts';
import { usePathname } from 'next/navigation';


const Footer = () => {

    const pathname = usePathname()

    console.log(pathname)

    return (
        <footer className={pathname === '/' ? s.bgGray : s.bgWhite} >
            <div className={s.container}>
                <div className={clsx('container mx-auto', s.containerBorder)}>
                    <SearchButton/>
                    <InfoList/>
                    <Contacts/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;