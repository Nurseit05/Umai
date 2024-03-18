import React from 'react';
import InfoContacs from './ui/InfoContacs';
import MenuFooterRouter from './ui/MenuFooterRouter';

import s from './footerMobile.module.scss'

const FooterMobile = () => {
    return (
        <footer>
            <InfoContacs/>
            <MenuFooterRouter/>
        </footer>
    );
};

export default FooterMobile;