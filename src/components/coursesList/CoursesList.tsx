import React, { useEffect, useState } from "react";
import { CourseItem } from "components/CourseItem/CourseItem";
import Loader from "components/Loader/Loader";
import {
  Container,
  CourseList,
  PaginationButton,
  PaginationButtonContainer,
  Title,
} from "./CoursesList.styled";

type IProps = {
  isLoading: boolean;
  courses: [];
};

const FIRST_PAGE = 1;
const COURSES_PER_PAGE = 10;

export const CoursesList: React.FC<IProps> = ({ isLoading, courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCourses, setCurrentCourses] = useState([]);
  const LAST_PAGE = currentCourses.length < 10;

  useEffect(() => {
    const visitedPages = (currentPage - 1) * COURSES_PER_PAGE;
    setCurrentCourses(
      courses.slice(visitedPages, visitedPages + COURSES_PER_PAGE)
    );
  }, [courses, currentPage]);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
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
        <PaginationButtonContainer>
          <PaginationButton
            active={currentPage > FIRST_PAGE}
            disabled={currentPage <= FIRST_PAGE}
            onClick={handlePrevClick}
          >
            Prev
          </PaginationButton>
          <PaginationButton
            active={!LAST_PAGE}
            disabled={LAST_PAGE}
            onClick={handleNextClick}
          >
            Next
          </PaginationButton>
        </PaginationButtonContainer>
      )}
    </Container>
  );
};
