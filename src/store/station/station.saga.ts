import { put, all, call, takeLatest } from "redux-saga/effects";

import { fetchStationFailure, fetchStationSuccess } from "./station.actions";
import { formatErrorMessage } from "../../utils";
import { ActionTypes } from "./station.types";
import { API } from "../../api";
import { Station } from "../../types";

export function* fetchStationAsync() {
  try {
    const stations: Station[] = yield call(API.getStations);
    yield put(fetchStationSuccess(stations));
  } catch (error) {
    const errMsg = formatErrorMessage(error);
    yield put(fetchStationFailure(errMsg));
  }
}

export function* fetchStations() {
  // pending fetch is cancelled pending fetch is cancelled and only the latest one will be run
  yield takeLatest(ActionTypes.FETCH_STATION_START, fetchStationAsync);
}

export function* stationSagas() {
  yield all([call(fetchStations)]);
}
