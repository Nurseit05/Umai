import { useFetch } from "@/hook/useFetch"

export const AggregationAPI = async () => {
    const aggregationData = await useFetch({URL: 'aggregation/get_aggregation/'})

    const bannerAPI = aggregationData?.banners;
    const underBannerTextAPI = aggregationData?.under_banner_text;
    const advantagesTitleAPI = aggregationData?.advantages_title;
    const forProvidersAPI = aggregationData?.for_providers;
    const additionalAdvantagesAPI = aggregationData?.additional_advantages;
    const forAdvertisersAPI = aggregationData?.for_advertisers;
    const terminalAdvantagesAPI = aggregationData?.terminal_advantages;
    


    return {
        bannerAPI,
        underBannerTextAPI,
        advantagesTitleAPI,
        forProvidersAPI,
        additionalAdvantagesAPI,
        forAdvertisersAPI,
        terminalAdvantagesAPI
    }
}