import { clientApi } from "@/api/config/axios"

export const Main_PageApi = {
    getMainPage() {
        return clientApi.get(`mainpage/get_main/`)
    }
}