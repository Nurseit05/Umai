/* =========================================================================
* UI
* ========================================================================= */
import SearchButton from './ui/SearchButton';
import InfoList from './ui/InfoList';
import Contacts from './ui/Contacts';

/* =========================================================================
* STYLE
* ========================================================================= */
import s from './footer.module.scss'

/* =========================================================================
* API TS
* ========================================================================= */
import { FooterContactTS, FooterSocialTS } from '@/api/service/header_footer/headerFooter';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';


interface Props {
    social: FooterSocialTS[];
    contacts: FooterContactTS[];
}

const FooterDesktop: React.FC<Props> = ({social, contacts}) => {

    return (
        <footer className={s.containerBorder}>
            <SearchButton/>
            <InfoList/>
            <Contacts
                social={social}
                contacts={contacts}
            />
        </footer>
    );
};

export default FooterDesktop;