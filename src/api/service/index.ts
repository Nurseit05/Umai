import { clientApi } from "../config/axios";

interface Props {
  url: string
}

export const CommerceFinancingApi = {
  getComemerceFinancing({url}: Props) {
    return clientApi.get(`${url}`);
  },
};