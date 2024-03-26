/* =========================================================================
* SHARED
* ========================================================================= */
import { useSizeByHeaders } from '@/shared/hook/useSizeMobile';

/* =========================================================================
* NEXT
* ========================================================================= */
import { headers } from 'next/headers';

/* =========================================================================
* REACT
* ========================================================================= */
import React from 'react';

/* =========================================================================
* UI
* ========================================================================= */
import FooterDesktop from './desktop';
import FooterMobile from './mobile';

/* =========================================================================
* API TS
* ========================================================================= */
import { FooterContactTS, FooterSocialTS } from '@/api/service/header_footer/headerFooter';


interface Props {
    social: FooterSocialTS[];
    contacts: FooterContactTS[];
}

const Footer: React.FC<Props> = ({social, contacts}) => {

    const { isMobile } = useSizeByHeaders(headers())
    
    return (
        <>
            {!isMobile 
            ? <FooterDesktop social={social} contacts={contacts} />
            : <FooterMobile  />
            }
        </>
    );
};

export default Footer;