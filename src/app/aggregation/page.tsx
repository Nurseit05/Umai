import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import FooterMobile from '@/components/FooterMobile';
import Footer from '@/components/Footer';

import Aggregation from ".";

import s from './aggregation.module.scss';


export default function AggregationPage() {

  return (
    <>
      <Header/>
      <HeaderMobile backgroundStyle={s.mobileBackground} />
      <Aggregation/>
      <Footer classBacground={s.backgroundFooter} />  
      <FooterMobile classBacground={s.backgroundFooter} />
    </>
  );
}
