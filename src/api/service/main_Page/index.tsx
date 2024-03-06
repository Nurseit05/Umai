import { clientApi } from "@/api/config/axios"

const Main_PageApi = {
    getMainPage() {
        return clientApi.get(`mainpage/get_main/`)
    }
}

export const {getMainPage} = Main_PageApi;