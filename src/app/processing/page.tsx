'use client'

import Header from "../Header";
import HeaderMobile from "@/components/HeaderMobile";
import { useMediaQuery } from "@/hook/useMediaQuery";
import FooterMobile from '@/components/FooterMobile';
import Footer from '../Footer';
import { Processing } from ".";

export default function Process() {

  const sizeMobile = useMediaQuery()

  console.log(sizeMobile)

  return (
    <>
      {sizeMobile ? <Header/> : <HeaderMobile/>}
      <Processing/>
      {sizeMobile ? <Footer/> : <FooterMobile/>}
    </>
  );
}
