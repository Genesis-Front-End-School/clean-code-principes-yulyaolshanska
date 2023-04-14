import styled from "styled-components";

export const Card = styled.li`
  border-radius: 16px;
  width: 340px;
  overflow: hidden;
  box-shadow: rgb(24 39 75 / 12%) 0px 8px 18px -6px,
    rgb(24 39 75 / 12%) 0px 12px 42px -4px;

  @media ${(p) => p.theme.media.tablet} {
    flex-basis: calc(33.33% - 24);
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const DetailsBox = styled.div`
  padding: 10px;
  @media ${(p) => p.theme.media.tablet} {
    padding: 20px;
  }
`;

export const CourseTitle = styled.h2`
  margin-bottom: 14px;
  font-size: 18px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 16px;
  }
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 14px;
  justify-content: space-between;
`;

export const CourseImg = styled.img`
  width: 320px;
  height: 160px;
  object-fit: cover;
  @media screen and (min-width: 480px) {
    width: 348px;
    height: 160px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 394px;
    height: 160px;
  }
`;

export const LessonsCount = styled.p`
  font-weight: 600;
`;

export const Rating = styled.p`
  font-weight: 600;
`;

export const Skills = styled.p`
  margin-bottom: 6px;
  font-weight: 600;
`;

export const SkillsList = styled.ul`
  margin-bottom: 10px;
  list-style-position: inside;
  list-style-type: disc;
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 24px;
  margin-bottom: 6px;
  display: list-item;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Progress = styled.p`
  font-size: 12px;
  line-height: calc(20 / 12);
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 12px;
  row-gap: 8px;
  margin-top: auto;
`;

export const TagItem = styled.p`
  padding: 2px 4px;
  font-size: 12px;
  color: #e74c3c;
  border-radius: 5px;
  @media screen and (min-width: 1280px) {
    padding: 4px 8px;
    font-size: 14px;
  }
`;
