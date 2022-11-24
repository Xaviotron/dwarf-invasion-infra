import { SimResponse } from "./types/sim";

export const handler = async (payload: string) => {
    console.log('The aggregator has been triggered')
    const reports: SimResponse[] = JSON.parse(payload);
}
