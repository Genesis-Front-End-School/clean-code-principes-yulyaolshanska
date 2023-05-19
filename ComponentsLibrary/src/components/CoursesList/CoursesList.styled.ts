import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  text-align: center;

  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 30px;
  }
`;

export const CourseList = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  @media ${(p) => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: unset;
  }
  @media screen and (min-width: 768px) and (max-width: 1060px) {
    width: 710px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 1060px;
  }
  @media ${(p) => p.theme.media.desktopM} {
    width: 100%;
  }
`;
