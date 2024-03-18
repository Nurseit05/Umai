/* =========================================================================
* NEXT
* ========================================================================= */
import { Metadata } from "next"

/* =========================================================================
* VIEWS
* ========================================================================= */
import MainPage from "@/views/main"

/* =========================================================================
* API
* ========================================================================= */
import { MainApi } from "@/api/service/main_Page"
import { PageSEO } from "@/api/service/seo"

export async function generateMetadata(): Promise<Metadata> {
  const { seo }: { seo: PageSEO} = await MainApi()

  return {
    title: seo.seo_description || "UMAI",
    description: seo.seo_description || "UMAI",
    keywords: seo.seo_keywords || "UMAI",
    openGraph: {
      title: seo.og_title || "UMAI",
      description: seo.og_description || "UMAI",
      images: [seo.og_image],
    },
  }
}

export default function Main() {
  return <MainPage />
}
