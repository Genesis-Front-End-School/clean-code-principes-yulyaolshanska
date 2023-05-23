import React from "react";
import {
  CurrentLessContainer,
  CurrentLesson,
  CurrentText,
  Title,
} from "./CurrentLessonInfo.styled";

interface ICurrentLessonInfo {
  title: string;
  status: string;
}

const CurrentLessonInfo: React.FC<ICurrentLessonInfo> = ({ title, status }) => {
  return (
    <>
      <CurrentLessContainer>
        <CurrentLesson>
          <Title> Current Lesson:</Title>
          <CurrentText>{title}.</CurrentText>
        </CurrentLesson>
        <CurrentLesson>
          <Title> Status: </Title>
          <CurrentText>{status}</CurrentText>
        </CurrentLesson>
      </CurrentLessContainer>
    </>
  );
};

export default CurrentLessonInfo;
