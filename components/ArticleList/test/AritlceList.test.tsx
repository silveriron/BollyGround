import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as ArticleListStories from '../ArticleList.stories'

const {Default} = composeStories(ArticleListStories)

test('render three aritle items', () => {
    render(<Default/>)

    const thumbnail = screen.getAllByRole('img');
    const title = screen.getAllByRole('heading');
    const desc = screen.getAllByText(/popular/i);
    const timeStamp = screen.getAllByText(/ago/i);

    expect(thumbnail).toHaveLength(3);
    expect(title).toHaveLength(3);
    expect(desc).toHaveLength(3);
    expect(timeStamp).toHaveLength(3);
})