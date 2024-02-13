import classNames from "classnames";
import React from "react";
import { Button, Card } from "react-daisyui";
import { Course } from "@/constants/interfaces"

interface Props {
    courses: Course[],

}

const AppCourseCard = ({ courses }: Props) => {



    if (!Array.isArray(courses)) {
        return <div className="flex justify-center w-full ">
            <>
                No courses available
            </>

        </div>;
    }

    return (
        <div className="flex md:space-x-5 max-md:grid-flow-row-dense max-md:grid">
            {

                courses.map((course, index) => (
                    <React.Fragment key={index}>

                        <Card className={classNames({
                            'h-fit md:w-[250px] max-md:w-full card shadow-lg rounded-xl pb-5': true,
                        })}>

                            <Card.Image

                                src={course.picture}
                                className={classNames({
                                    "h-[180px] w-full  border-b-[0.5px] pb-1  ": true,
                                })} />

                            <Card.Body className="px-2 mt-3">
                                <Card.Title className={classNames({
                                    "truncate mt-2 w-full  text-sm  font-semibold": true,
                                })}>{course.name}</Card.Title>
                                <div className="flex w-full justify-end pt-2">
                                    <div className="w-full  py-3 ">
                                        <span className="font-bold justify-start  text-sm">{course.currency === 'USD' ? '$' : 'ZWL'}{course.price}</span>
                                    </div>

                                    <Button
                                        className="hover:bg-primary btn-outline border-primary hover:border-transparent
                                             outline-primary
                                             hover:text-white"
                                        // onClick={() => addToCart(course)}
                                        size="md">Add to Cart
                                    </Button>

                                </div>

                            </Card.Body>
                        </Card>
                    </React.Fragment>
                ))

            }
        </div>)
}










export default AppCourseCard;