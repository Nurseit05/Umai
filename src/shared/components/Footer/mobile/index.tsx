import React from 'react';
import InfoContacs from './ui/InfoContacs';
import MenuFooterRouter from './ui/MenuFooterRouter';

import s from './footerMobile.module.scss'

/* =========================================================================
* API TS
* ========================================================================= */
import { FooterContactTS, FooterSocialTS } from '@/api/service/header_footer/headerFooter';


const FooterMobile = () => {
    return (
        <footer>
            <InfoContacs/>
            <MenuFooterRouter/>
        </footer>
    );
};

export default FooterMobile;