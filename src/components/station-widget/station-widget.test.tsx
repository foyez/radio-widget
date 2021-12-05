import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { StationWidget } from "./station-widget";

describe("<StationWidget />", () => {
  const stationProps = {
    stationName: "Radio Amar",
    imgUrl: "/test.png",
  };
  test("should display these contents", () => {
    const component = render(<StationWidget {...stationProps} />);

    const imgElement = component.container.querySelectorAll("img")[1];

    expect(imgElement).toHaveAttribute("alt", stationProps.stationName);
    expect(imgElement).toHaveAttribute("src", stationProps.imgUrl);
  });
});
