import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionTypes } from "./station.types";
import type { Station } from "../../types";

export const fetchStationsStart = () => ({
  type: ActionTypes.FETCH_STATIONS_START,
});
export const fetchStationsSuccess = (stations: Station[]) => ({
  type: ActionTypes.FETCH_STATIONS_SUCCESS,
  payload: stations,
});
export const fetchStationsFailure = (errorMessage: string) => ({
  type: ActionTypes.FETCH_STATIONS_FAILURE,
  payload: errorMessage,
});
export const selectStation = (station: Station | null) => ({
  type: ActionTypes.SELECT_STATION,
  payload: station,
});

export const useStationActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ fetchStationsStart, selectStation }, dispatch);
};
