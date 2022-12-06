import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as AboutPageStories from '../AboutPage.stories'

const {Default} = composeStories(AboutPageStories)

describe('render About page', () => {
    beforeAll(() => {
        render(<Default/>)
    })

    it('render five image and title', () => {
        expect(screen.getAllByRole('img')).toHaveLength(5);
        expect(screen.getByRole('heading')).not.toBe(null);
    })
})
