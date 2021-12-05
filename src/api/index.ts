import data from "./data.json";
import type { Station } from "../types";
import { isArray, wait } from "../utils";

export const API = {
  getStations: async (): Promise<Station[]> => {
    await wait(500);

    const stations: Station[] = isArray(data) ? data : [];
    return stations;
  },
};
