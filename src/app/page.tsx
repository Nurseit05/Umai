'use client'

import Main from './main/index' 
import Header from "./Header";
import HeaderMobile from "@/components/HeaderMobile";
import { useMediaQuery } from "@/hook/useMediaQuery";
import FooterMobile from '@/components/FooterMobile';
import Footer from './Footer';

export default function Home() {

  const sizeMobile = useMediaQuery()

  console.log(sizeMobile)

  return (
    <>
      {sizeMobile ? <Header/> : <HeaderMobile/>}
      <Main/>
      {sizeMobile ? <Footer/> : <FooterMobile/>}
    </>
  );
}
