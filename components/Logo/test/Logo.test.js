import { screen, render } from "@testing-library/react";

import Logo from "../Logo";

test("BollyGround Logo", () => {
  render(<Logo />);

  const BollyGroundLogo = screen.getByRole("heading", { name: /BollyGround/i });
  expect(BollyGroundLogo).not.toBe();
});
