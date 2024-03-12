import { useFetch } from "@/hook/useFetch"

export const WalletAPI = async () => {
    const walletData = await useFetch({URL: 'wallet/get_wallet_data/'})

    const bannerAPI = walletData?.banners;
    const servicesAPI = walletData?.services;
    const advantagesAPI = walletData?.advantages;


    return {
        bannerAPI,
        servicesAPI,
        advantagesAPI
    }
}