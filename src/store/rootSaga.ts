import { all, call } from "redux-saga/effects";
import { stationSagas } from "./station/station.saga";

export function* rootSaga() {
  yield all([call(stationSagas)]);
}
