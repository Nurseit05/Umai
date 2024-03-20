/* =========================================================================
* REACT
* ========================================================================= */
import React from "react"

/* =========================================================================
* NEXT
* ========================================================================= */
import localFont from 'next/font/local'

/* ========================================================================
* LIBS
* ========================================================================= */
import clsx from "clsx";

/* =========================================================================
* SHARED
* ========================================================================= */
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";

/* =========================================================================
* API
* ========================================================================= */
import { HeaderFooterAPI } from "@/api/service/header_footer";
import { FooterContactTS, FooterSocialTS } from "@/api/service/header_footer/headerFooter";


const inter = localFont({
  src: [
    {
      path: "../../assets/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../assets/fonts/Inter-Bold.ttf",
      weight: "700",
    },
  ],
})

interface Props {
  children: React.ReactNode;
  color?: string;
}

export const Layout: React.FC<Props> = async ({ children, color}) => {
  const { footerContacts, footerSocial}: {
    footerContacts: FooterContactTS[];
    footerSocial: FooterSocialTS[];
  } = await HeaderFooterAPI()

  return (
    <html lang="en">
      <body className={clsx(inter.className, color)} suppressHydrationWarning>
        <Header/>
        {children}
        <Footer
          social={footerSocial}
          contacts={footerContacts}
        />
      </body>
    </html>
  )
}