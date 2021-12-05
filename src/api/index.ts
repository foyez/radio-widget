import data from "./data.json";
import type { Station } from "../types";
import { wait } from "../utils";

export const API = {
  getStations: async (): Promise<Station[]> => {
    await wait(500);

    const stations: Station[] = Array.isArray(data) ? data : [];
    return stations;
  },
};
