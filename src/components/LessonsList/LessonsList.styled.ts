import styled from "styled-components";

export const Title = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 32px;
`;

export const CourseLessonsList = styled.ol``;

export const CourseLesson = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  cursor: pointer;
`;
