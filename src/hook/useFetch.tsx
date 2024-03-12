import { clientApi } from "@/api/config/axios"
import { cache } from "react"

interface Props {
    URL: string;
}

export const useFetch = cache(async({
    URL
}: Props) => {
    let faq

    try {
        const { data } = await clientApi.get(URL)
        faq = data
        return faq
    } catch (e) {}
})