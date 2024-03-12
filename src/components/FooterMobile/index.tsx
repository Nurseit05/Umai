import React from 'react';
import InfoContacs from './components/InfoContacs';
import MenuFooterRouter from './components/MenuFooterRouter';

import s from './footerMobile.module.scss'

import clsx from 'clsx';

interface Props  {
    classBacground: string
}

const FooterMobile = ({classBacground}: Props) => {
    return (
        <footer className={clsx(s.container, classBacground)} >
            <InfoContacs/>
            <MenuFooterRouter/>
        </footer>
    );
};

export default FooterMobile;