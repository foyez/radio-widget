import { put, all, call, takeLatest } from "redux-saga/effects";

import { fetchStationsFailure, fetchStationsSuccess } from "./station.actions";
import { formatErrorMessage } from "../../utils";
import { ActionTypes } from "./station.types";
import { API } from "../../api";
import { Station } from "../../types";

export function* fetchStationsAsync() {
  try {
    const stations: Station[] = yield call(API.getStations);
    yield put(fetchStationsSuccess(stations));
  } catch (error) {
    const errMsg = formatErrorMessage(error);
    yield put(fetchStationsFailure(errMsg));
  }
}

export function* fetchStations() {
  // pending fetch is cancelled pending fetch is cancelled and only the latest one will be run
  yield takeLatest(ActionTypes.FETCH_STATIONS_START, fetchStationsAsync);
}

export function* stationSagas() {
  yield all([call(fetchStations)]);
}
