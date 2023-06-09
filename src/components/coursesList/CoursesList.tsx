import React, { useEffect, useMemo, useState } from "react";
import { CourseItem } from "../CourseItem/CourseItem";
import { Container, CourseList, Title } from "./CoursesList.styled";
import { Pagination } from "../Pagination/Pagination";
import { COURSES_PER_PAGE } from "../../constants/pagination";
import { ICourse } from "types/type";

interface CoursesListProps {
  courses: ICourse[];
}

export const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCourses, setCurrentCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    const visitedPages: number = (currentPage - 1) * COURSES_PER_PAGE;
    setCurrentCourses(
      courses.slice(visitedPages, visitedPages + COURSES_PER_PAGE)
    );
  }, [courses, currentPage]);

  const totalPageCount = useMemo(() => {
    return Math.ceil(courses.length / COURSES_PER_PAGE);
  }, [courses.length]);

  const handlePaginationClick = (currentPage: number): void => {
    setCurrentPage(currentPage);
  };

  return (
    <Container>
      <Title>Our Courses</Title>
      <CourseList>
        {currentCourses.map(
          ({
            id,
            lessonsCount,
            rating,
            title,
            tags,
            meta,
            previewImageLink,
          }) => (
            <CourseItem
              key={id}
              courseId={id}
              lessonsCount={lessonsCount}
              rating={rating}
              title={title}
              tags={tags}
              courseMeta={meta}
              image={previewImageLink}
            />
          )
        )}
      </CourseList>
      {currentCourses?.length !== 0 && (
        <Pagination
          onPaginationClick={handlePaginationClick}
          totalPageCount={totalPageCount}
        />
      )}
    </Container>
  );
};
