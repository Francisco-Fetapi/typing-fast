import { createGlobalStyle } from "styled-components";

interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
    body{
        background-image:url("${(props) => `/bg-${props.mode}.jpg`}");
        background-position:center center ;
        background-attachment: fixed;
        background-repeat:no-repeat;
        background-size:cover;
    }
`;
