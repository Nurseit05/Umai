
import Main from './main/index' 

import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import FooterMobile from '@/components/FooterMobile';
import Footer from '@/components/Footer';

import s from './main/main.module.scss'

export default function Home() {

  return (
    <>
      <Header/>
      <HeaderMobile/>
      <Main/>
      <Footer classBacground={s.backgroundFooter} />
      <FooterMobile classBacground={s.backgroundFooter} />
    </>
  );
}
