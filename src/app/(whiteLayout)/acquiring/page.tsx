/* =========================================================================
* NEXT
* ========================================================================= */
import { Metadata } from "next";

/* =========================================================================
* API
* ========================================================================= */
import { AcquiringAPI } from "@/api/service/acquiring_Page";
import { PageSEO } from "@/api/service/seo";

/* =========================================================================
* VIEWS
* ========================================================================= */
import { AcquiringPage } from "@/views/acquiring";


export async function generateMetadata(): Promise<Metadata> {
    const { seo }: { seo: PageSEO} = await AcquiringAPI()
  
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

const Acquiring = () => {
    return (
        <>
            <AcquiringPage />
        </>
    );
};

export default Acquiring;