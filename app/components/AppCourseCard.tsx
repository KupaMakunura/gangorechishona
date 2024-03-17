"use client";
import { Course } from "@/constants/interfaces";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Card } from "react-daisyui";
import { CiTimer } from "react-icons/ci";

interface Props {
  courses: Course[];
}

const AppCourseCard = ({ courses }: Props) => {
  const router = useRouter();

  if (!Array.isArray(courses)) {
    return (
      <div className="flex-1 space-y-4 justify-center w-full ">
        <p className="text-2xl">No courses available</p>
        <button className="btn btn-primary text-white" onClick={()=>router.refresh()}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="flex md:space-x-5 max-md:grid-flow-row-dense max-md:grid">
      {courses.map((course, index) => (
        <React.Fragment key={index}>
          <Card
            className={classNames({
              "h-fit md:w-[300px] max-md:w-full card shadow px-2 rounded-md pt-2 pb-8":
                true,
            })}
          >
            <Card.Image
              src={course.picture}
              className={classNames({
                "h-[180px] w-full  border-b-[0.5px] pb-1 px-0 ": true,
              })}
            />

            <Card.Body className="px-2 mt-3">
              <Card.Title
                className={classNames({
                  "truncate mt-2 w-full  text-sm ": true,
                })}
              >
                {course.name}
              </Card.Title>

              <span className="mt-3 font-semibold ">
                {" "}
                <CiTimer className="text-normal font-semibold text-primary inline-block" />{" "}
                8 hrs
              </span>
              <div className="flex w-full justify-end pt-2 mt-2">
                <div className="w-full  py-3 ">
                  <span className=" justify-start  text-sm font-semibold">
                    {course.currency === "USD" ? "$" : "ZWL"} {course.price}
                  </span>
                </div>

                <Button
                  className="hover:bg-primary btn btn-primary text-white border-primary hover:border-transparent
                                                outline-primary
                                                hover:text-white"
                  onClick={() =>
                    router.push(`/courses/${course.id}/`, { scroll: true })
                  }
                >
                  More info
                </Button>
              </div>
            </Card.Body>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AppCourseCard;
