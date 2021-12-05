import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Footer } from "./footer";

describe("<Footer />", () => {
  const stationName = "Radio Amar";

  test("footer section should be empty if station name is undefined", () => {
    const component = render(<Footer stationName={undefined} />);

    const footer = component.container.querySelector("#footer");

    expect(footer).toHaveTextContent("");
  });

  test("station name should be display if station name is provided", () => {
    const component = render(<Footer stationName={stationName} />);

    const footer = component.container.querySelector("#footer");

    expect(footer).toHaveTextContent(stationName);
  });
});
