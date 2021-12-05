import React from "react";

import {
  fetchStationsFailure,
  fetchStationsStart,
  fetchStationsSuccess,
  selectStation,
} from "./station.actions";
import { ActionTypes } from "./station.types";

describe("station actions", () => {
  it("fetchStationsStart action has the correct type", () => {
    const action = fetchStationsStart();

    expect(action.type).toEqual(ActionTypes.FETCH_STATIONS_START);
  });

  it("fetchStationsSuccess action has the correct type and payload", () => {
    const stations = [
      { id: 1, name: "Radion Amar", frequency: "69,5", imgUrl: "" },
    ];
    const action = fetchStationsSuccess(stations);

    expect(action.type).toEqual(ActionTypes.FETCH_STATIONS_SUCCESS);
    expect(action.payload).toEqual(stations);
  });

  it("fetchStationsFailure action has the correct type and payload", () => {
    const errorMsg = "unknown error";
    const action = fetchStationsFailure(errorMsg);

    expect(action.type).toEqual(ActionTypes.FETCH_STATIONS_FAILURE);
    expect(action.payload).toEqual(errorMsg);
  });

  it("selectStation action has the correct type and payload", () => {
    const station = {
      id: 1,
      name: "Radion Amar",
      frequency: "69,5",
      imgUrl: "",
    };
    const action = selectStation(station);
    const action2 = selectStation(null);

    expect(action.type).toEqual(ActionTypes.SELECT_STATION);
    expect(action.payload).toEqual(station);
    expect(action2.payload).toEqual(null);
  });
});
