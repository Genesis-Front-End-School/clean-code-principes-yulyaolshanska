import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CourseImg,
  CourseTitle,
  DetailsBox,
  LessonsCount,
  Rating,
  SkillItem,
  Skills,
  SkillsList,
  TagItem,
} from "./CourseItem.styled";

interface ICourseMeta {
  courseVideoPreview?: object;
  skills?: string[];
}

interface CourseProps extends React.ComponentPropsWithoutRef<"div"> {
  courseId: string;
  lessonsCount: number;
  rating: number;
  title: string;
  tags?: string[];
  courseMeta?: ICourseMeta;
  image: string;
}

export const CourseItem: React.FC<CourseProps> = ({
  courseId,
  lessonsCount,
  rating,
  title,
  tags = [],
  courseMeta,
  image,
}) => {
  const skills: string[] = courseMeta?.skills?.slice(0, 3) || [];
  const location = useLocation();

  return (
    <Card>
      <NavLink to={`/${courseId}`} state={{ from: location }}>
        <CourseImg src={image + "/cover.webp"} alt="Course preview image" />
        <DetailsBox>
          <CourseTitle>{title}</CourseTitle>
          <Box>
            <LessonsCount>Lessons: {lessonsCount}</LessonsCount>
            <Rating>Rating: {rating}</Rating>
          </Box>
          {skills.length > 0 && (
            <>
              <Skills>Skills:</Skills>
              <SkillsList>
                {skills.map((skill: string) => (
                  <SkillItem key={skill}> {skill}</SkillItem>
                ))}
              </SkillsList>
            </>
          )}
          <TagItem>#{tags}</TagItem>
        </DetailsBox>
      </NavLink>
    </Card>
  );
};
