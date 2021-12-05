import React from "react";
import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";

import { StationList } from "./station-list";
import store from "../../store";

afterEach(cleanup);

describe("<StationList />", () => {
  it("should show station list", async () => {
    render(
      <Provider store={store}>
        <StationList />
      </Provider>
    );

    const out = await waitFor(() => screen.getByTestId("station-list"));
    const stationItems = out.querySelectorAll(".stationItem");

    expect(stationItems).not.toBeNull();
  });

  it("should toggle station widget", async () => {
    render(
      <Provider store={store}>
        <StationList />
      </Provider>
    );

    const out = await waitFor(() => screen.getByTestId("station-list"));
    const stationContents = out.querySelectorAll(".stationContent");

    let radioWidget = screen.queryByTestId("station-widget");
    expect(radioWidget).toBeNull();

    fireEvent.click(stationContents[0]);
    radioWidget = await waitFor(() => screen.queryByTestId("station-widget"));
    expect(radioWidget).toBeInTheDocument();

    fireEvent.click(stationContents[0]);
    radioWidget = screen.queryByTestId("station-widget");
    expect(radioWidget).toBeNull();
  });
});
