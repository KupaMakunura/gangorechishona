"use client";
import AppCourseCard from "@/components/AppCourseCard";
import useCourses from "@/hooks/useCourses";
import AppCourseSkeleton from "./AppCourseSkeleton";

const AppCourse = () => {
  //api call to the backend and fetch the courses

  const {isLoading,courses} = useCourses();


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="max-md:grid grid md:grid-cols-4 md:space-x-4 md:mt-5 max-md:grid-cols-1 max-md:mt-3 max-md:space-y-3">
      {isLoading ? (
        <AppCourseSkeleton loaders={numbers} />
      ) : (
        <AppCourseCard courses={typeof courses !== "undefined" ? courses : []} />
      )}
    </div>
  );
};

export default AppCourse;
