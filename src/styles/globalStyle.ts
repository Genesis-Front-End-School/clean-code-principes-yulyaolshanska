import { createGlobalStyle, withTheme } from "styled-components";
import { GlobalThemeProps } from "../types/type";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    background-color:${({ theme }: GlobalThemeProps) => theme.colors.body};
  }
   
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{   
     margin: 0;
    color:${({ theme }: GlobalThemeProps) => theme.colors.accent};
}
  p {
    margin: 0;
    color:${({ theme }: GlobalThemeProps) => theme.colors.subTitle};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default withTheme(GlobalStyle);
