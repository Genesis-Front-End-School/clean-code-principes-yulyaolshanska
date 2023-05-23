import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 20px 24px;
  margin-left: auto;
  margin-right: auto;
  width: 360px;

  @media ${(p) => p.theme.media.tablet} {
    width: 768px;
  }
  @media screen and (min-width: 1060px) {
    width: 1060px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 1280px;
  }
  @media ${(p) => p.theme.media.desktopM} {
    width: 1420px;
  }
`;