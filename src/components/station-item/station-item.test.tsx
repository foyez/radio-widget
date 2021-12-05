import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { StationItem } from "./station-item";

afterEach(cleanup);

describe("<StationItem />", () => {
  const station = {
    id: 1,
    name: "Putin FM",
    frequency: "66,6",
    imgUrl: "./stations/station-1.png",
  };
  const selectedStation = {
    id: 2,
    name: "Amar FM",
    frequency: "76,6",
    imgUrl: "./stations/station-2.png",
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

  // test("after clicking the station content, station widget is displayed", () => {
  //   const mockHandler = jest.fn();
  //   const component = render(
  //     <StationItem
  //       station={station}
  //       onClickStation={mockHandler}
  //       selectedStation={station}
  //     />
  //   );

  //   const stationContent = component.getByTestId("station-content");
  //   fireEvent.click(stationContent);

  //   // const stationWidget = component.container.querySelector("#station-widget");
  //   // console.log(stationWidget);

  //   expect(mockHandler.mock.calls).toHaveLength(1);
  //   // expect(stationWidget).not.toBeNull();
  // });
});
