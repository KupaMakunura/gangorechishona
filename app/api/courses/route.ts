import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

//create a course
export const POST = async (request: NextRequest) => {
  return NextResponse.json({});
};



//GET all courses
export const GET = async (request: NextRequest) => {
  const courses = await prisma.course.findMany();

  return NextResponse.json({ courses: courses });
};
