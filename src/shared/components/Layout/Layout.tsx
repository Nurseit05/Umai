/* =========================================================================
* REACT
* ========================================================================= */
import React from "react"

/* =========================================================================
* NEXT
* ========================================================================= */
import localFont from 'next/font/local'

/* =========================================================================
* LIBS
* ========================================================================= */
import clsx from "clsx";

/* =========================================================================
* SHARED
* ========================================================================= */
import Footer from "@/shared/components/Footer";

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

  return (
    <html lang="en">
      <body className={clsx(inter.className, color)} suppressHydrationWarning>
        {children}
        <Footer/>
      </body>
    </html>
  )
}