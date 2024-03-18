/* =========================================================================
* NEXT
* ========================================================================= */
import { Metadata } from "next";

/* =========================================================================
* VIEWS
* ========================================================================= */
import { ProcessingPage } from "@/views/processing";

/* =========================================================================
* API
* ========================================================================= */
import { ProcessingApi } from "@/api/service/processing";
import { PageSEO } from "@/api/service/seo";


export async function generateMetadata(): Promise<Metadata> {
  const { seo }: {seo: PageSEO} = await ProcessingApi()

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

export default function Processing() {

  return (
    <>
      <ProcessingPage/>
    </>
  );
}
