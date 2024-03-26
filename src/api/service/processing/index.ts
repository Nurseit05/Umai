import { useFetch } from "@/shared/hook/useFetch"

export const ProcessingApi = async () => {
    const processingData = await useFetch({URL: 'processing/get_processing_data/'})

    const seo = processingData?.seo;
    const bannerAPI = processingData?.banner
    const underBannerProcessingAPI = processingData?.under_banner_processing
    const interfacesTitleAPI = processingData?.interfaces_title
    const advantagesAPI = processingData?.advantages
    const processingServicesAPI = processingData?.processing_services
    const participantsTitleAPI = processingData?.participants_title
    const schemeTitleAPI = processingData?.scheme_title
    const systemsTitleAPI = processingData?.systems_title

    return {
        seo,
        bannerAPI,
        underBannerProcessingAPI,
        interfacesTitleAPI,
        advantagesAPI,
        participantsTitleAPI,
        processingServicesAPI,
        schemeTitleAPI,
        systemsTitleAPI
    }
}