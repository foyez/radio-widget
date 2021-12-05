import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Header } from "./header";

describe("<Header />", () => {
  test("should display these contents", () => {
    const component = render(<Header />);
    const backBtn = component.getByTitle("back");
    const switchBtn = component.getByTitle("back");
    const headerTitle = component.container.querySelector("h1");

    expect(headerTitle).toHaveTextContent("Stations");
    expect(backBtn).toBeInTheDocument();
    expect(switchBtn).toBeInTheDocument();
  });
});
