import React from "react";
import {
  CurrentLessContainer,
  CurrentLesson,
  CurrentText,
} from "./CurrentLessonInfo.styled";

interface ICurrentLessonInfo {
  title: string;
  status: string;
}

export const CurrentLessonInfo: React.FC<ICurrentLessonInfo> = ({
  title,
  status,
}) => {
  return (
    <CurrentLessContainer>
      <CurrentLesson>
        Current Lesson: <CurrentText>{title}</CurrentText>
      </CurrentLesson>
      <CurrentLesson>
        Status: <CurrentText>{status}</CurrentText>
      </CurrentLesson>
    </CurrentLessContainer>
  );
};
