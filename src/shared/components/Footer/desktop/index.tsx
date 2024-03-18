import SearchButton from './ui/SearchButton';
import InfoList from './ui/InfoList';
import Contacts from './ui/Contacts';

import s from './footer.module.scss'

const FooterDesktop = () => {

    return (
        <footer className={s.containerBorder}>
            <SearchButton/>
            <InfoList/>
            <Contacts/>
        </footer>
    );
};

export default FooterDesktop;