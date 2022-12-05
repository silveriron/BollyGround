import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as AboutSection from "../AboutSection.stories";

const { Default } = composeStories(AboutSection);

test("check two image", async () => {
  render(<Default />);

  const title = screen.getAllByRole("heading");
  expect(title).not.toBe(null);

  const img = await screen.findAllByRole("img");
  expect(img).not.toBe(null);
});
