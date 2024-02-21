"use client";
import { Skeleton } from "react-daisyui"


interface Props {
    loaders: number[]
}

const AppCourseSkeleton = ({ loaders }: Props) => {

    return (
        <>
            {loaders.map((_num, index) =>

                <div key={index} className="h-fit gap-3 max-md:w-full  md:w-[250px] rounded-xl pb-5">


                    <Skeleton className="w-full h-[180px] rounded-md pb-5 skeleton" >
                    </Skeleton>
                    <div className="flex-1 w-full mt-2 space-y-3">
                        <Skeleton className="h-5 w-[90%] rounded-sm"></Skeleton>
                        <Skeleton className="h-5 w-[40%] rounded-sm"></Skeleton>
                    </div>

                </div>
            )}
        </>



    )
}

export default AppCourseSkeleton