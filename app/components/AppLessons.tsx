"use client";
import { lessonImages } from "../constants"
import { Card } from "react-daisyui";
import classNames from "classnames";


const AppLessons = () => {
    return (
        <>
            <main className="container mx-auto mt-8">
                <section className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                        Lessons in Progress
                    </h1>
                    <p className="text-gray-600 text-base">
                        Explore our language lessons in action. See how our interactive and engaging sessions make learning a breeze.
                    </p>
                </section>

                <section className="md:flex justify-center md:space-x-8 max-md:flex-row max-md:space-y-3">
                    {lessonImages.map((image, index) => (
                        <Card key={index} className={classNames({
                            'h-fit md:w-[300px] max-md:w-full card shadow rounded-xl': true,
                        })}>

                            <Card.Image src={image} className={classNames({
                                "h-[300px] w-full  border-b-[0.5px] pb-1  image-full object-cover rounded-md": true,
                            })} />

                        </Card>
                    ))}
                </section>
            </main>
        </>
    )
}

export default AppLessons