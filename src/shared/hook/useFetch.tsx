import { clientApi } from "@/api/config/axios";
import { cache } from "react";


interface Props {
    URL: string;
}

export const useFetch = cache(async ({
    URL
}: Props) => {
    let faq;

    try {
        const { data } = await clientApi.get(URL);
        faq = data;
        return faq;
    } catch (e: any) {
        switch (e.response?.status) {
            case 500:
                throw new Error("500");
            case 502:
                throw new Error("502");
            default:
                throw new Error("Unknown Error");
        }
    }
});