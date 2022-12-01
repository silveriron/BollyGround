import * as NextImage from "next/image";

import MuiThemeProvider from "../styles/MuiThemeProvider";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withTemeProvider = (Story) => (
  <MuiThemeProvider>
    <Story />
  </MuiThemeProvider>
);

export const decorators = [withTemeProvider];
