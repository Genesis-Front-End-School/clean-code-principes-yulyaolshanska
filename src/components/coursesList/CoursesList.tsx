import React, { useEffect, useMemo, useState } from "react";
import { CourseItem } from "components/CourseItem/CourseItem";
import Loader from "components/Loader/Loader";
import { Container, CourseList, Title } from "./CoursesList.styled";
import { Pagination } from "components/Pagination/Pagination";
import { COURSES_PER_PAGE } from "constants/pagination";

type IProps = {
  isLoading: boolean;
  courses: [];
};

export const CoursesList: React.FC<IProps> = ({ isLoading, courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCourses, setCurrentCourses] = useState([]);

  useEffect(() => {
    const visitedPages = (currentPage - 1) * COURSES_PER_PAGE;
    setCurrentCourses(
      courses.slice(visitedPages, visitedPages + COURSES_PER_PAGE)
    );
  }, [courses, currentPage]);

  const totalPageCount = useMemo(() => {
    return Math.ceil(courses.length / COURSES_PER_PAGE);
  }, [courses.length]);

  const handlePaginationClick = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <Container>
      <Title>Our Courses</Title>
      <CourseList>
        {!isLoading ? (
          currentCourses.map(
            ({
              id,
              lessonsCount,
              rating,
              title,
              tags,
              meta,
              previewImageLink,
              description,
            }) => (
              <CourseItem
                key={id}
                id={id}
                description={description}
                lessonsCount={lessonsCount}
                rating={rating}
                title={title}
                tags={tags}
                meta={meta}
                image={previewImageLink}
              />
            )
          )
        ) : (
          <Loader />
        )}
      </CourseList>
      {!isLoading && currentCourses?.length !== 0 && (
        <Pagination
          onPaginationClick={handlePaginationClick}
          totalPageCount={totalPageCount}
        />
      )}
    </Container>
  );
};
