import Header from '@/components/Header';
import HeaderMobile from '@/components/HeaderMobile';
import Footer from '@/components/Footer';
import FooterMobile from '@/components/FooterMobile';

import Acquiring from '.';

const AcquiringPage = () => {
    return (
        <>
            <Header />
            <HeaderMobile />
            <Acquiring />
            <Footer classBacground='' />  
            <FooterMobile classBacground='' />
        </>
    );
};

export default AcquiringPage;