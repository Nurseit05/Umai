import { useFetch } from "@/hook/useFetch"

export const AcquiringAPI = async () => {
    const acquiringData = await useFetch({URL: 'acquiring/get_acquiring/'})

    const bannerAcquiringAPI = acquiringData?.banners;
    const internetAcquiringAPI = acquiringData?.internet_acquiring;
    const advantagesTitleAcquiringAPI = acquiringData?.advantages_title;
    const possiblitesAcquiringAPI = acquiringData?.possiblites;

    return {
        bannerAcquiringAPI,
        internetAcquiringAPI,
        advantagesTitleAcquiringAPI,
        possiblitesAcquiringAPI
    }
}