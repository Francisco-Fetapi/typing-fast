import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "../styles/GlobalStyles";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles mode={theme.palette.mode} />
      {children}
    </ThemeProvider>
  );
}
