import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { StationItem } from "./station-item";

describe("<StationItem />", () => {
  const station = {
    id: 1,
    name: "Putin FM",
    frequency: "66,6",
    imgUrl: "./stations/station-1.png",
  };

  test("renders content", () => {
    const mockHandler = jest.fn();
    const component = render(
      <StationItem
        station={station}
        onClickStation={mockHandler}
        selectedStation={null}
      />
    );

    const stationContent = component.getByTestId("station-content");

    expect(stationContent).toHaveTextContent(station.name);
    expect(stationContent).toHaveTextContent(station.frequency);
  });
});
