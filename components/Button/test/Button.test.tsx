import { render, screen } from "@testing-library/react";
import * as ButtonStories from "../Button.stories";
import { composeStories } from "@storybook/testing-react";

const { Default } = composeStories(ButtonStories);

test("test", () => {
  render(<Default />);

  const clickButton = screen.getByRole("button", { name: /BUTTON/i });
  expect(clickButton).not.toBe(null);
});
