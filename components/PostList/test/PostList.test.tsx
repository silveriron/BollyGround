import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as PostListStories from "../PostList.stories";

const { Default } = composeStories(PostListStories);

test("render four aritle items", () => {
  render(<Default />);

  const thumbnail = screen.getAllByRole("img");
  const title = screen.getAllByRole("heading");
  const desc = screen.getAllByText(/popular/i);
  const timeStamp = screen.getAllByText(/ago/i);

  expect(thumbnail).toHaveLength(4);
  expect(title).toHaveLength(4);
  expect(desc).toHaveLength(4);
  expect(timeStamp).toHaveLength(4);
});
