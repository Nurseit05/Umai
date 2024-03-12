import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import FooterMobile from '@/components/FooterMobile';
import Footer from '@/components/Footer';

import Walletting from ".";

import s from './wallet.module.scss';


export default function Wallet() {

  return (
    <>
      <Header/>
      <HeaderMobile/>
      <Walletting/>
      <Footer classBacground={s.backgroundFooter} />  
      <FooterMobile classBacground={s.backgroundFooter} />
    </>
  );
}
