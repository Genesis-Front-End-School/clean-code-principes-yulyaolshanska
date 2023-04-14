import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  @media ${(p) => p.theme.media.tablet} {
    width: 768px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 1280px;
  }
`;

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
  gap: 24px;
  margin-bottom: 32px;
  @media ${(p) => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: unset;
    gap: 24px;
  }
`;

export const StyledButton = styled.button<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;
  border: ${(p) => (p.active ? "none" : "2px solid")};
  border-radius: 40px;
  background-color: ${(p) =>
    p.active ? p.theme.colors.accent : p.theme.colors.white};
  color: ${(p) =>
    p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.accent};

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${(p) =>
      p.active ? p.theme.colors.accent : p.theme.colors.white};
    border-color: ${(p) => p.theme.colors.hoverBtn};
    color: ${(p) =>
      p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.accent};
    outline: none;
    cursor: ${(p) => (p.active ? "pointer" : "none")};
  }
`;

export const PaginationButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled(StyledButton)`
  border-radius: 20%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: ${(p) => (p.active ? "scale(1.1)" : "scale(1.0)")};
  }
  :not(:last-child) {
    margin-right: 10px;
  }
`;
