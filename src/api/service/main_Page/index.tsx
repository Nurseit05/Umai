import { useFetch } from "@/shared/hook/useFetch"

export const MainApi = async () => {
    const mainData = await useFetch({URL: 'mainpage/get_main/'})

    const seo = mainData?.seo;
    const bannerAPI = mainData?.banners;
    const servicesAPI = mainData?.services;
    const additionalServicesAPI = mainData?.additional_services;
    const updatesAPI = mainData?.updates;
    const branchesAPI = mainData?.branches;
    
    return {
        seo,
        bannerAPI,
        servicesAPI,
        additionalServicesAPI,
        updatesAPI,
        branchesAPI
    }
}