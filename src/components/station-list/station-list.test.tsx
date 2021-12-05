import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { StationList } from "./station-list";
import store, { createStoreFn } from "../../store";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Putin FM",
          frequency: "66,6",
          imgUrl: "./stations/station-1.png",
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// describe("<StationList />", () => {
test("should show station list", async () => {
  render(
    <Provider store={createStoreFn()}>
      <StationList />
    </Provider>
  );

  await waitForElementToBeRemoved(screen.getByTestId("load-spinner"), {
    timeout: 4000,
  });

  const out = await waitFor(() => screen.getByTestId("station-list"), {
    timeout: 4000,
  });

  console.log(out);
});
// });
