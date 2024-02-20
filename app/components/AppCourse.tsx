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

    const oneCourse: Course[] = [{
        created_at: "",
        currency: "USD",
        description: "Shona fundamentals",
        duration: "3 weeks",
        id: "4747474",
        name: "Fundamentals of Shona",
        price: 20,
        picture: "/team-1.jpg",
        updated_at: ""
    }
    ]

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="grid grid-cols-4 space-x mt-5">
            {
                isLoading ?
                    <AppCourseSkeleton loaders={numbers} />
                    :
                    <AppCourseCard courses={oneCourse} />
            }


        </div>


    )
}

export default AppCourse;