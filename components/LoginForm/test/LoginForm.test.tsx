import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as LoginFormStories from '../LoginForm.stories'

const { Default } = composeStories(LoginFormStories)

test('render login form', () => {
    render(<Default/>)

    const emailInput = screen.getByRole('textbox')
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button')

    expect(emailInput)
    expect(passwordInput)
    expect(loginButton)
})