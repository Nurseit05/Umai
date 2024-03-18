/* =========================================================================
 * React
 * ========================================================================= */
import React from "react"

/* =========================================================================
 * SHARED
 * ========================================================================= */
import Layout from "@/shared/components/Layout"

/* =========================================================================
 * STYLES
 * ========================================================================= */
import "@/shared/style/base.scss"

export default function WhiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Layout color="white">{children}</Layout>
}
