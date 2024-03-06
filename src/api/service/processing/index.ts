import { clientApi } from "@/api/config/axios"

const ProcessingApi = {
    getProcessData() {
        return clientApi.get(`processing/get_processing_data/`)
    }
}

export const {getProcessData} = ProcessingApi;