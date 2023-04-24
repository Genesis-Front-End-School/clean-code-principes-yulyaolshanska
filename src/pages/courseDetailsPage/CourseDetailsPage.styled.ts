import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import theme from "styles/theme";

interface LessonTitleProps extends React.HTMLProps<HTMLHeadingElement> {
  active?: boolean;
}

export const ArrowIcon = styled(MdArrowBackIos)`
  width: 20px;
  height: 20px;
  @media ${(p) => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const CourseTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;

export const Title = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 32px;
`;

export const CourseDescription = styled.p`
  margin-bottom: 16px;
  text-align: center;
  font-size: 18px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 20px;
  }
`;

export const CourseLessonsList = styled.ol``;

export const BackLink = styled(NavLink)`
  position: absolute;
  top: 20px;
  left: -30px;
  z-index: 10;
  padding: 10px 15px;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: ${(p) => p.theme.colors.accent};
  border-radius: 20px;
  background-color: rgb(246, 247, 247);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: rgb(191, 191, 191);
  }
  &.active {
    background-color: rgba(254, 254, 254, 0.5);
  }
`;

export const LockIcon = styled(FaLock)``;

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

export const LessonLink = styled.a``;

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

export const CourseLesson = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  cursor: pointer;
`;
