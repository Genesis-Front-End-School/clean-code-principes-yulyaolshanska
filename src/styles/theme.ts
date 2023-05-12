import { ThemeProps } from "types/type";

// };
export const lightTheme: ThemeProps = {
  colors: {
    body: "#FFF",
    background: "#E5E5E5",
    backdrop: "#11111199",
    accent: "#6648c8",
    text: "#111321",
    title: "#312ee2",
    subTitle: "#259c96",
    cardShadow1: "rgb(217 226 247 / 12%)",
    cardShadow2: "rgb(146 156 176 / 15%)",
    primaryText: "#111111",
    primaryBtnText: "#111111",
    secondatyBtnText: "#FFFFFF",
    hoverBtn: "#FF6101",
  },
  media: {
    mobile: "(min-width: 320px)",
    mobileM: "(max-width: 767px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1280px)",
  },
};

export const darkTheme: ThemeProps = {
  colors: {
    body: "#282c35",
    background: "#6648c8",
    backdrop: "#11111199",
    accent: "#906eff",
    // text: "#a38bf3",
    text: "    #d4c9fdf2",
    title: "#6648c8",
    subTitle: "#4fd4ce",
    cardShadow1: "rgb(193 208 242 / 12%)",
    cardShadow2: "rgb(150 181 255 / 12%)",
    primaryText: "#7449ff;",

    primaryBtnText: "#111111",
    secondatyBtnText: "#FFFFFF",
    hoverBtn: "#FF6101",
  },
  media: {
    mobile: "(min-width: 320px)",
    mobileM: "(max-width: 767px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1280px)",
  },
};
