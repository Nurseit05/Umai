/* =========================================================================
* API
* ========================================================================= */
import { AggregationAPI } from "@/api/service/aggregation_Page";
import { PageSEO } from "@/api/service/seo";

/* =========================================================================
* VIEWS
* ========================================================================= */
import { AggregationPage } from "@/views/aggregation";

/* =========================================================================
* NEXT
* ========================================================================= */
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const { seo }: { seo: PageSEO} = await AggregationAPI()

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

export default function Aggregation() {

  return (
    <>
      <AggregationPage/>
    </>
  );
}
