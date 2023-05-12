import styled from "styled-components";
import theme from "styles/theme";
import { FaLock } from "react-icons/fa";

interface LessonTitleProps extends React.HTMLProps<HTMLHeadingElement> {
  active?: boolean;
}

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
