import React from "react";
import {
  CourseLesson,
  CourseLessonsList,
  CurrentLessContainer,
  CurrentLesson,
  CurrentText,
  LessonTitle,
  LockIcon,
  Title,
  TitleBox,
} from "./LessonsList.styled";
import { ILesson, LessonseDetails } from "types/type";
import { LOCKED } from "constants/other";

interface ILessonsListProps {
  lessons?: ILesson[];
  currentLesson: LessonseDetails | null;
  onLessonClick: (lesson: LessonseDetails) => void;
}

const LessonsList: React.FC<ILessonsListProps> = ({
  lessons,
  currentLesson,
  onLessonClick,
}) => {
  return (
    <>
      {currentLesson && (
        <CurrentLessContainer>
          <CurrentLesson>
            Current Lesson: <CurrentText>{currentLesson.title}</CurrentText>
          </CurrentLesson>
          <CurrentLesson>
            Status: <CurrentText>{currentLesson.status}</CurrentText>
          </CurrentLesson>
        </CurrentLessContainer>
      )}
      <Title>Lessons:</Title>
      <CourseLessonsList>
        {lessons?.map((lesson: LessonseDetails) => (
          <CourseLesson
            onClick={() => onLessonClick(lesson)}
            key={lesson.id}
            id={lesson.id}
          >
            <TitleBox>
              <LessonTitle active={currentLesson?.id === lesson.id}>
                {lesson.title}.
              </LessonTitle>
              {lesson.status === LOCKED && <LockIcon />}
            </TitleBox>
          </CourseLesson>
        ))}
      </CourseLessonsList>
    </>
  );
};

export default LessonsList;
