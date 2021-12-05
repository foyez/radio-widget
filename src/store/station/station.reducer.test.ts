import React from "react";
import { stationReducer } from "./station.reducer";
import { ActionTypes } from "./station.types";

describe("station reducers", () => {
  const stations = [
    { id: 1, name: "Radion Amar", frequency: "69,5", imgUrl: "" },
  ];
  const state = {
    stations: [],
    selectedStation: null,
    isFetching: false,
    errorMessage: null,
  };

  it("handles actions of type FETCH_STATIONS_START", () => {
    const newState = stationReducer(state, {
      type: ActionTypes.FETCH_STATIONS_START,
    });

    expect(newState.isFetching).toBe(true);
  });

  it("handles actions of type FETCH_STATIONS_SUCCESS", () => {
    const newState = stationReducer(state, {
      type: ActionTypes.FETCH_STATIONS_SUCCESS,
      payload: stations,
    });

    expect(newState.isFetching).toBe(false);
    expect(newState.stations).toEqual(stations);
  });

  it("handles actions of type FETCH_STATIONS_FAILURE", () => {
    const errMsg = "unknown error";
    const newState = stationReducer(state, {
      type: ActionTypes.FETCH_STATIONS_FAILURE,
      payload: errMsg,
    });

    expect(newState.isFetching).toBe(false);
    expect(newState.errorMessage).toBe(errMsg);
  });

  it("handles actions of type SELECT_STATION", () => {
    const newState = stationReducer(state, {
      type: ActionTypes.SELECT_STATION,
      payload: stations[0],
    });

    expect(newState.selectedStation).toEqual(stations[0]);
  });
});
