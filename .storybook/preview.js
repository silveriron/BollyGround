import MuiThemeProvider from "../styles/MuiThemeProvider";

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
