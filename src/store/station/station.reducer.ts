import type { Station } from "../../types";
import { ActionTypes } from "./station.types";

export type StationState = {
  stations: Station[];
  selectedStation: Station | null;
  isFetching: boolean;
  errorMessage: string | null;
};

interface FetchStationStart {
  type: ActionTypes.FETCH_STATIONS_START;
}
interface FetchStationSuccess {
  type: ActionTypes.FETCH_STATIONS_SUCCESS;
  payload: Station[];
}
interface FetchStationFailure {
  type: ActionTypes.FETCH_STATIONS_FAILURE;
  payload: string;
}
interface SelectStation {
  type: ActionTypes.SELECT_STATION;
  payload: Station;
}

type StationAction =
  | FetchStationStart
  | FetchStationSuccess
  | FetchStationFailure
  | SelectStation;

const initialState: StationState = {
  stations: [],
  selectedStation: null,
  isFetching: false,
  errorMessage: null,
};

export const stationReducer = (
  state = initialState,
  action: StationAction
): StationState => {
  switch (action.type) {
    case ActionTypes.FETCH_STATIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_STATIONS_SUCCESS:
      return {
        ...state,
        stations: action.payload,
        isFetching: false,
      };
    case ActionTypes.FETCH_STATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ActionTypes.SELECT_STATION:
      return {
        ...state,
        selectedStation: action.payload,
      };
    default:
      return state;
  }
};
