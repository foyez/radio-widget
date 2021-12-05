import { useSelector } from "react-redux";
import type { RootState } from "../rootReducer";

const selectStationSate = (state: RootState) => state.station;

export const useStation = () => useSelector(selectStationSate);
