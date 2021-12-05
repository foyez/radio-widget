import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionTypes } from "./station.types";
import type { Station } from "../../types";

export const fetchStationStart = () => ({
  type: ActionTypes.FETCH_STATION_START,
});
export const fetchStationSuccess = (stations: Station[]) => ({
  type: ActionTypes.FETCH_STATION_SUCCESS,
  payload: stations,
});
export const fetchStationFailure = (errorMessage: string) => ({
  type: ActionTypes.FETCH_STATION_FAILURE,
  payload: errorMessage,
});
export const selectStation = (station: Station | null) => ({
  type: ActionTypes.SELECT_STATION,
  payload: station,
});

export const useStationActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ fetchStationStart, selectStation }, dispatch);
};
