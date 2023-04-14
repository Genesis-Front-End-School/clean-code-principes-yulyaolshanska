import { CourseItem } from "components/courseItem/CourseItem";
import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";
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

export const CoursesList: React.FC<IProps> = ({ isLoading, courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCourses, setCurrentCourses] = useState(courses.slice(0, 10));

  useEffect(() => {
    if (currentPage === 1) {
      setCurrentCourses(courses.slice(0, 10));
    }
  }, [courses, currentPage]);

  const getCurrentCourses = (page: number) => {
    switch (page) {
      case 1:
        setCurrentCourses(courses.slice(0, 10));
        break;
      case 2:
        setCurrentCourses(courses.slice(10, 20));
        break;
      case 3:
        setCurrentCourses(courses.slice(20, 30));
        break;
      default:
        setCurrentCourses(courses.slice(0, 10));
        break;
    }
  };

  const handlePrevClick = async () => {
    setCurrentPage(currentPage - 1);
    getCurrentCourses(currentPage - 1);
  };

  const handleNextClick = async () => {
    setCurrentPage(currentPage + 1);
    getCurrentCourses(currentPage + 1);
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
            active={currentPage > 1}
            disabled={currentPage <= 1}
            onClick={handlePrevClick}
          >
            Prev
          </PaginationButton>
          <PaginationButton
            active={currentPage !== 3}
            disabled={currentPage === 3}
            onClick={handleNextClick}
          >
            Next
          </PaginationButton>
        </PaginationButtonContainer>
      )}
    </Container>
  );
};
