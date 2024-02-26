"use client";
import Image from "next/image";
import { Button } from "react-daisyui";


const CourseDetail = () => {
  return (
    <div className="flex w-full md:justify-center">
      <div className="md:flex  md:w-[70%] max-md:flex-row max-md:w-full max-md:px-3 md:shadow mt-8 rounded-md">
        <div className="flex-row w-full h-auto px-3 py-5">
          <div className="flex w-full justify-center">
            <Image src="/team-1.jpg" alt='Course Image' width={300} height={300} className='rounded-md w-full ' />
          </div>


          <p className=" mt-3  text-xl">Fundamentals of Shona</p>

          <p className="mt-3">Posted on <span className="font-semibold">12 Dec 2023</span></p>

          <p className="text-lg mt-3 ">Description</p>

          <div className="w-full rounded-md border-slate-300  py-3 mt-3">
            <p>jdjdjdjdjdjdjdjdjdjdjd  didiijv hdhuddh dgygdygydg dgdygdhd dddygd
              dhdhdhhdd   dgdyd hdgy dhugffnfuf sifhgf fv fydfs sfdfdf
              hddhd dgdgudh dgdghdhd

              jdjdjdjdjdjdjdjdjdjdjd  didiijv hdhuddh dgygdygydg dgdygdhd dddygd
              dhdhdhhdd   dgdyd hdgy dhugffnfuf sifhgf fv fydfs sfdfdf
              hddhd dgdgudh dgdghdhd

            </p>

          </div>

        </div>

        <div className="flex-row w-full px-3 py-5">
          <p className="text-lg">Duration : 64 hrs</p>

          <p className="mt-3 text-lg">Price : $120 </p>

          <Button
            type='submit'
            onClick={() => console.log("Ok")}
            className=' btn-primary text-white rounded-md max-md:right-0 w-full mt-10 '
          // loading={true}
          >
            Add to cart

          </Button>
          <Button
            type='submit'
            onClick={() => console.log("Ok")}
            className=' btn-error mt-5 text-white rounded-md max-md:right-0 w-full '
          // loading={true}
          >
            Remove from cart

          </Button>

        </div>
      </div>

    </div>
  )
}

export default CourseDetail