import { CoursesList } from "../../components/CoursesList/CoursesList";
import { useAppDispatch } from "helpers/hooks/hooks";
import React, { useEffect } from "react";
import { useGetTokenQuery } from "redux/auth/authApi";
import { setToken } from "redux/auth/authSlice";
import { coursesApi } from "redux/coursesApi";
import Loader from "components/Loader/Loader";

const CoursesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetTokenQuery("");
  const [getCourses, { isLoading, currentData }] =
    coursesApi.endpoints.getCourses.useLazyQuery();
  const courses = currentData?.courses || [];

  useEffect(() => {
    if (data?.token) {
      dispatch(setToken(data?.token));
      getCourses("");
    }
  }, [data, getCourses]);

  return (
    <>
      {!isLoading ? (
        <CoursesList courses={courses} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CoursesPage;
