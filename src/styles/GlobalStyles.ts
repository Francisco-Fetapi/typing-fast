import { createGlobalStyle } from "styled-components";

interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
    body{
        background-color:#f4f4f4;
    }
`;
