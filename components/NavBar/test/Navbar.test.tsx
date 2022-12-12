import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import mockRouter from "next-router-mock";

import * as NavBarStories from "../NavBar.stories";

const { Default } = composeStories(NavBarStories);

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

test("render NavMenu", async () => {
  mockRouter.setCurrentUrl("/");

  render(<Default />);

  const navMenu = await screen.findAllByRole("link");

  expect(navMenu).toHaveLength(5);
});
