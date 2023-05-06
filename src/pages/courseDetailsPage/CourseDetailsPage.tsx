import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "redux/coursesApi";
import {
  ArrowIcon,
  BackLink,
  CourseDescription,
  CourseTitle,
  VideoContainer,
} from "./CourseDetailsPage.styled";
import { Container } from "components/CoursesList/CoursesList.styled";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";
import LessonsList from "components/LessonsList/LessonsList";
import { LOCKED } from "constants/other";
import { LessonseDetails } from "types/type";

const CourseDetailsPage: React.FC = () => {
  const { id: courseId = "" } = useParams<{ id: string }>();
  const { state }: { state?: { from: string } } = useLocation();
  const backLinkHref = state?.from ?? "/";
  const { data: course } = useGetCourseByIdQuery(courseId);
  const [currentLesson, setCurrentLesson] = useState<LessonseDetails | null>(
    null
  );
  const [isVideoOpen, setIsVideoOpen] = useState(true);

  useEffect(() => {
    if (course?.lessons && course.lessons.length > 0) {
      setCurrentLesson(course.lessons[0]);
    }
  }, [course]);

  const handleLessonClick = (lesson: LessonseDetails): void => {
    if (lesson.status !== LOCKED) {
      setIsVideoOpen(true);
    } else {
      setIsVideoOpen(false);
    }
    setCurrentLesson(lesson);
  };

  return (
    <Container>
      <BackLink to={backLinkHref}>
        <ArrowIcon />
        Go Back
      </BackLink>
      <CourseTitle>{course?.title}</CourseTitle>
      <CourseDescription>{course?.description}</CourseDescription>
      <VideoContainer>
        {isVideoOpen && currentLesson && (
          <VideoPlayer
            id={currentLesson.id}
            videoLink={currentLesson.link}
            order={currentLesson.order}
            previewImageLink={currentLesson.previewImageLink}
            status={currentLesson.status === LOCKED ? "locked" : "unlocked"}
          />
        )}
      </VideoContainer>
      <LessonsList
        lessons={course?.lessons}
        onLessonClick={handleLessonClick}
        currentLesson={currentLesson}
      />
    </Container>
  );
};

export default CourseDetailsPage;
