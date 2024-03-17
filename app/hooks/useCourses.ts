import { Course } from "@/constants/interfaces";
import axios from "axios";
import useSWR from "swr";

const useCourses = () => {
  const fetcher = (url: string): Promise<Course[]> =>
    axios.get(url).then((res) => res.data);

  const { data: courses, isLoading, } = useSWR("/api/courses/", fetcher);
  return { courses, isLoading };
};

export default useCourses;
