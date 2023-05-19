import React from "react";
import { CourseLessonsList, Title } from "./LessonsList.styled";
import { ILesson, LessonseDetails } from "../../types/type";
import { CurrentLessonInfo } from "../CurrentLessonInfo/CurrentLessonInfo";
import { LessonItem } from "../LessonItem/LessonItem";

interface ILessonsListProps {
  lessons?: ILesson[];
  currentLesson: LessonseDetails | null;
  onLessonClick: (lesson: LessonseDetails) => void;
}

export const LessonsList: React.FC<ILessonsListProps> = ({
  lessons,
  currentLesson,
  onLessonClick,
}) => {
  return (
    <>
      {currentLesson && (
        <CurrentLessonInfo
          title={currentLesson?.title}
          status={currentLesson?.status}
        />
      )}
      <Title>Lessons:</Title>
      <CourseLessonsList>
        {lessons?.map((lesson: LessonseDetails) => (
          <LessonItem
            handleLessonClick={() => onLessonClick(lesson)}
            key={lesson.id}
            lesson={lesson}
            currentLessonId={currentLesson?.id}
          />
        ))}
      </CourseLessonsList>
    </>
  );
};

export default LessonsList;
