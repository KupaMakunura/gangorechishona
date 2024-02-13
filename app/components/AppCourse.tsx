"use client";
import AppCourseCard from "@/components/AppCourseCard";
import { Course } from "@/constants/interfaces";
import axios from "axios";
import useSWR from "swr";
import AppCourseSkeleton from "./AppCourseSkeleton";



const AppCourse = () => {
    //api call to the backend and fetch the courses
    const fetcher = (url: string): Promise<Course[]> => axios.get(url).then((res) => res.data);

    const { data: courses, isLoading } = useSWR("/api/courses/", fetcher)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <>{
            isLoading ?
                <AppCourseSkeleton loaders={numbers} />
                :
                <AppCourseCard courses={courses ?? []} />
        }


        </>


    )
}

export default AppCourse;