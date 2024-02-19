import React from 'react';
import NavSearch from './containers/NavSearch';
import InfoList from './containers/InfoList';

import s from './style.module.scss'
import clsx from 'clsx';

const Footer = () => {
    return (
        <footer className={clsx('flex mx-auto container', s.containerBorder)} >
            <NavSearch/>
            <InfoList/>
        </footer>
    );
};

export default Footer;