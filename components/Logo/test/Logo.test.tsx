import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as LogoStories from '../Logo.stories'

const {Default} = composeStories(LogoStories)

test("BollyGround Logo", () => {
  render(<Default />);

  const BollyGroundLogo = screen.getByRole("heading");
  expect(BollyGroundLogo).not.toBe(null);
});
