import { useFetch } from "@/hook/useFetch"

export const WalletAPI = async () => {
    const walletData = await useFetch({URL: 'wallet/get_wallet_data/'})

    const seo = walletData?.seo;
    const bannerAPI = walletData?.banners;
    const servicesAPI = walletData?.services;
    const advantagesAPI = walletData?.advantages;

    return {
        seo,
        bannerAPI,
        servicesAPI,
        advantagesAPI
    }
}