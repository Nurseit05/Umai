import { useFetch } from "@/shared/hook/useFetch"

export const HeaderFooterAPI = async () => {
    const headerFooterData = await useFetch({URL: 'header_footer/get_header_footer/'})

    const headerSubItems = headerFooterData?.header_sub_items;
    const footerSocial = headerFooterData?.footer_social;
    const footerContacts = headerFooterData?.footer_contacts;
    
    return {
        headerSubItems,
        footerSocial,
        footerContacts
    }
}