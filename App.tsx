import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import theme from "./src/styles/theme";
import Routes from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
