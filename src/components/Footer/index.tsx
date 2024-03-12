import SearchButton from './SearchButton';
import InfoList from './InfoList';
import Contacts from './Contacts';

import { clsx } from 'clsx';

import s from './footer.module.scss'

const Footer = ({ classBacground }: { classBacground: string }) => {

    return (
        <footer className={clsx(s.container, classBacground)} >
            <div className={s.containerBorder}>
                <SearchButton/>
                <InfoList/>
                <Contacts/>
            </div>
        </footer>
    );
};

export default Footer;