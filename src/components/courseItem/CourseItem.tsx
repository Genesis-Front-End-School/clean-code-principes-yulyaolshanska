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

interface IMeta {
  courseVideoPreview: object;
  skills?: string[];
}

interface ICourse {
  id: string;
  description: string;
  lessonsCount: number;
  rating: number;
  title: string;
  tags: [];
  meta: IMeta;
  image: string;
}

export const CourseItem: React.FC<ICourse> = ({
  id,
  lessonsCount,
  rating,
  title,
  tags,
  meta,
  image,
}) => {
  const skills = meta?.skills?.slice(0, 3) ?? [];
  const location = useLocation();

  return (
    <Card>
      <NavLink to={`/${id}`} state={{ from: location }}>
        <CourseImg src={image + "/cover.webp"} />
        <DetailsBox>
          <CourseTitle>{title}</CourseTitle>
          <Box>
            <LessonsCount>Lessons: {lessonsCount}</LessonsCount>
            <Rating>Rating: {rating}</Rating>
          </Box>
          {skills.length > 0 && <Skills>Skills:</Skills>}
          <SkillsList>
            {skills.length > 0 &&
              skills.map((skill: string) => (
                <SkillItem key={skill}> {skill}</SkillItem>
              ))}
          </SkillsList>
          <TagItem key={id}>#{tags}</TagItem>
        </DetailsBox>
      </NavLink>
    </Card>
  );
};
