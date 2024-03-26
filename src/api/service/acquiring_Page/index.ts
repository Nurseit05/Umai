import { useFetch } from "@/shared/hook/useFetch"

export const AcquiringAPI = async () => {
    const acquiringData = await useFetch({URL: 'acquiring/get_acquiring/'})

    const seo = acquiringData?.seo;
    const bannerAcquiringAPI = acquiringData?.banners;
    const internetAcquiringAPI = acquiringData?.internet_acquiring;
    const advantagesTitleAcquiringAPI = acquiringData?.advantages_title;
    const possiblitesAcquiringAPI = acquiringData?.possiblites;

    return {
        seo,
        bannerAcquiringAPI,
        internetAcquiringAPI,
        advantagesTitleAcquiringAPI,
        possiblitesAcquiringAPI
    }
}