import styled from "styled-components";

// export const Container = styled.div`
//   position: relative;
//   padding: 40px 20px;
//   margin-left: auto;
//   margin-right: auto;
//   @media ${(p) => p.theme.media.tablet} {
//     width: 768px;
//   }
//   @media ${(p) => p.theme.media.desktop} {
//     width: 1280px;
//   }
// `;

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
  gap: 30px;
  margin-bottom: 32px;
  @media ${(p) => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: unset;
    gap: 24px;
  }
`;
