import { CourseLesson } from "components/LessonsList/LessonsList.styled";
import { LOCKED } from "constants/other";
import React from "react";
import { ILesson, LessonseDetails } from "types/type";
import { LessonTitle, LockIcon, TitleBox } from "./LessonItem.styled";

interface ILessonItem {
  handleLessonClick: (lesson: LessonseDetails) => void;
  currentLessonId?: string;
  lesson: ILesson;
}

const LessonItem: React.FC<ILessonItem> = ({
  handleLessonClick,
  currentLessonId,
  lesson,
}) => {
  return (
    <CourseLesson onClick={() => handleLessonClick(lesson)}>
      <TitleBox>
        <LessonTitle active={currentLessonId === lesson.id}>
          {lesson.title}.
        </LessonTitle>
        {lesson.status === LOCKED && <LockIcon />}
      </TitleBox>
    </CourseLesson>
  );
};

export default LessonItem;
