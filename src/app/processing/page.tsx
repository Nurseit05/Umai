// 'use client'

import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import FooterMobile from '@/components/FooterMobile';
import Footer from '@/components/Footer';

import { Processing } from ".";

import s from './processing.module.scss';


export default function Process() {

  return (
    <>
      <Header/>
      <HeaderMobile/>
      <Processing/>
      <Footer classBacground={s.backgroundFooter} />  
      <FooterMobile classBacground={s.backgroundFooter} />
    </>
  );
}
