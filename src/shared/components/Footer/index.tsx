import { useSizeByHeaders } from '@/hook/useSizeMobile';

import { headers } from 'next/headers';

import React from 'react';
import FooterDesktop from './desktop';
import FooterMobile from './mobile';

const Footer = () => {

    const { isMobile } = useSizeByHeaders(headers())
    
    return (
        <>
            {!isMobile 
            ? <FooterDesktop/>
            : <FooterMobile/>
            }
        </>
    );
};

export default Footer;