import styled from "styled-components";
import theme from "styles/theme";
import { FaLock } from "react-icons/fa";

interface LessonTitleProps extends React.HTMLProps<HTMLHeadingElement> {
  active?: boolean;
}

export const CurrentLessContainer = styled.div`
  margin-bottom: 20px;
`;

export const CurrentLesson = styled.p`
  margin: 8px 0;
  font-size: 20px;
  font-weight: 600;
`;

export const CurrentText = styled.span`
  font-weight: 400;
`;

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

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LessonTitle = styled.h2<LessonTitleProps>`
  margin-right: 10px;
  font-weight: 500;
  color: ${(p) => (p.active ? theme.colors.title : "inherit")};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const LockIcon = styled(FaLock)``;
