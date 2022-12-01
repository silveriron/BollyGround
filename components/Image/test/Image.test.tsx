import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as ImageStories from "../Image.stories";

const { Large } = composeStories(ImageStories);

test("render image", () => {
  render(<Large />);

  const image = screen.getByRole("img", { name: /bolly/i });
  expect(image).not.toBe(null);
});
